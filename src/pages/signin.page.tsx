import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signinUser } from "../api/user.api";
import FormLayoutComponent from "../layout/form-layout.page";
import ErrorMessage from "../shared/components/error.page";
import TitleComponent from "../shared/components/title.page";
import { storeToLocalStorage } from "../utils/local-storage.utils";
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
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  debugger;
  console.log("error message", errors);
  watch("email");

  const loginBtnClicked = () => {
    getSignIn();
  };

  const getSignIn = async () => {
    const requestBody = {
      email: email,
      password: password,
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

    /*
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    };

    try {
      const data = await fetch(
        "http://localhost:8080/api/auth/login",
        requestOptions
      );
      const loginInfo = await data.json();
      // const loginMessage = loginInfo.message;
      if (loginInfo.token) {
        navigate("/products", {
          state: {
            token: loginInfo.token,
          },
        });
      }
    } catch (error) {
      console.log("login failed", error);
    }
    */
  };

  // useEffect(() => {
  //   console.log("login btn flag", loginBtn);
  //   getSignIn();
  // }, [loginBtn]);

  const signup = (props) => {
    navigate("/sign-up");
  };

  const onSubmit = (data) => {
    debugger;
    console.log("data", data);
  };
  return (
    <>
      <ErrorMessage error={errorMessage} />
      <FormLayoutComponent>
        <form className="form p-3" onSubmit={handleSubmit(onSubmit)}>
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
                name="email"
                {...register("email", {
                  required: true,
                  minLength: 20,
                })}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                aria-label="Enter an email"
                aria-required="true"
              />
              {errors.email?.type === "required" && (
                <p role="alert">Required</p>
              )}
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
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                aria-label="Enter a password"
                aria-required="true"
                {...register("password", {
                  required: "Required",
                  minLength: 8,
                  maxLength: 20,
                })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && <p role="alert">{errors.password.message}</p>}
            </div>
            <div className="form-button mb-4">
              <button
                className="btn-yellow"
                type="button"
                name="signin"
                onClick={loginBtnClicked}
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
      </FormLayoutComponent>
    </>
  );
};

export default SigninComponent;
