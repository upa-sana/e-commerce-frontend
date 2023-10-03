import { useState } from "react";
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
  return (
    <>
      <ErrorMessage error={errorMessage} />
      <FormLayoutComponent>
        <TitleComponent title={"Sign in"}></TitleComponent>
        <form className="form p-3">
          <div className="form-group">
            <label className="form-label" for="email">
              Email
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="input-field mb-4 ">
            <label className="font-extrabold text-sm mb-2" for="password">
              Password
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
            />
          </div>
          <div className="form-button mb-4">
            <button
              className="btn-yellow"
              type="button"
              name="signin"
              onClick={loginBtnClicked}
            >
              Sign in
            </button>
          </div>
          <div className="term-condition text-sm">
            By continuing, you agree to Product's{" "}
            <span className="text-blue-500">Conditions of Use </span>
            and <span className="text-blue-500"> Privacy</span> Notice.
          </div>

          <div
            className="border border-solid border-gray-300 p-2 mt-4 rounded-md text-center text-sm cursor-pointer"
            onClick={signup}
          >
            Create your account
          </div>
        </form>
      </FormLayoutComponent>
    </>
  );
};

export default SigninComponent;
