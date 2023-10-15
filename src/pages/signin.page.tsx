import { signinUser } from "@api/user.api";
import { DevTool } from "@hookform/devtools";
import FormLayoutComponent from "@layout/form-layout.page";
import ErrorMessage from "@shared/components/error.page";
import TitleComponent from "@shared/components/title.page";
import { storeToLocalStorage } from "@utils/local-storage.utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const SigninComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  watch("email");

  const loginBtnClicked = () => {
    getSignIn();
  };

  const getSignIn = async (userCred) => {
    const requestBody = {
      email: userCred.email,
      password: userCred.password,
    };

    const userLogin = signinUser(requestBody)
      .then((res) => {
        if (res.data.token) {
          storeToLocalStorage("user", res.data.userInfo);
          storeToLocalStorage("token", res.data.token);
          window.location.href = "/";
        } else {
          return;
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      });
  };

  const signup = (props) => {
    navigate("/sign-up");
  };

  const onSubmit = (data) => {
    getSignIn({ email: data.emaill, password: data.password });
  };
  return (
    <>
      <ErrorMessage error={errorMessage} />
      <FormLayoutComponent>
        <form className="form p-3" onSubmit={handleSubmit(onSubmit)} noValidate>
          <fieldset>
            <legend>
              <TitleComponent title={"Sign in"}></TitleComponent>
            </legend>

            <div className="form-group">
              <label
                className="form-label"
                aria-label="Enter an email"
                for="email"
              >
                Email<span>*</span>
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9.-]+@[a-z]+.[a-z]{2,3}$/,
                    message: "Invalid email",
                  },
                })}
                autoComplete="off"
                aria-label="Enter an email"
                aria-required="true"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <div className="input-field mb-4 ">
              <label
                className="font-extrabold text-sm mb-2"
                for="password"
                aria-label="Enter a password"
              >
                Password <span>*</span>
              </label>
              <input
                className="border border-solid border-gray-400 rounded-md h-10 w-full mt-1
              hover:border-yellow-300 focus:border-yellow-300 active:border-yellow-300 p-4"
                type="password"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must be atlest 8 character",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password can't exceed 20 character",
                  },
                })}
                autoComplete="off"
                aria-label="Enter a password"
                aria-required="true"
              />
              <p className="text-red-500">{errors.password?.message}</p>
            </div>
            <div className="form-button mb-4">
              <button
                className="btn-yellow"
                type="submit"
                name="signin"
                aria-label="Sign in to e-commerce application"
              >
                Sign in
              </button>
            </div>
            <a
              role="link"
              href=""
              aria-label="By continuing you agree to product's condition of use and privacy notice"
              className="term-condition text-sm"
            >
              By continuing, you agree to Product's
              <span className="text-[#326ed1]"> Conditions of Use </span>
              and <span className="text-[#326ed1]"> Privacy</span> Notice.
            </a>

            <button className="btn-default w-full mt-4" onClick={signup}>
              Create your account
            </button>
          </fieldset>
        </form>
        <DevTool control={control} />
      </FormLayoutComponent>
    </>
  );
};

export default SigninComponent;
