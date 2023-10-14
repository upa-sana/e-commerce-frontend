import FormLayoutComponent from "@layout/form-layout.page";
import TitleComponent from "@shared/components/title.page";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignupComponent = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    role: "User",
  });

  const navigate = useNavigate();

  const updateUser = (e) => {
    // const { name, value } = e.target;
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const signupUser = async (event) => {
    event.preventDefault();
    setUserInfo(userInfo);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    };

    try {
      const data = await fetch(
        "http://localhost:8080/api/auth/signup",
        requestOptions
      );
      const jsonData = await data.json();
    } catch (error) {
      console.log("error", error);
    }
  };
  // useEffect(() => {
  //   console.log("do the role updated");
  //   setUserInfo(userInfo.role);
  // }, [userInfo.role]);

  const signin = () => {
    navigate("/sign-in");
  };
  return (
    <FormLayoutComponent>
      <TitleComponent title={"Sign up"}></TitleComponent>
      <form className="form p-3" onSubmit={signupUser}>
        <div className="font-extrabold text-sm mb-2">
          <label className="label mb-3">Name</label>
          <input
            className="border border-solid border-gray-400 rounded-md h-10 w-full mt-1 hover:border-yellow-300 focus:border-yellow-300 active:border-yellow-300 p-4"
            placeholder="Enter your name"
            type="text"
            name="name"
            value={userInfo.name}
            onChange={updateUser}
          />
        </div>
        <div className="font-extrabold text-sm mb-2">
          <label className="label">Email</label>
          <input
            className="border border-solid border-gray-400 rounded-md h-10 w-full mt-1 hover:border-yellow-300 focus:border-yellow-300 active:border-yellow-300 p-4"
            placeholder="Enter your email"
            type="text"
            name="email"
            value={userInfo.email}
            onChange={updateUser}
          />
        </div>

        <div className="font-extrabold text-sm mb-2">
          <label className="label">Password</label>
          <input
            className="border border-solid border-gray-400 rounded-md h-10 w-full mt-1 hover:border-yellow-300 focus:border-yellow-300 active:border-yellow-300 p-4"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={userInfo.password}
            onChange={updateUser}
          />
        </div>
        <div className="font-extrabold text-sm mb-2">
          <label className="label">Role</label>
          <select
            className="border border-solid border-gray-400 rounded-md h-10 w-full mt-1 hover:border-yellow-300 focus:border-yellow-300 active:border-yellow-300 p-4"
            onChange={updateUser}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="buttons">
          <button
            type="submit"
            className="bg-yellow-300 text-gray-800 w-full p-2 mr-2 rounded-lg hover:bg-yellow-400"
            name="submit-btn"
          >
            Sign up
          </button>
        </div>
        <div
          className="border border-solid border-gray-300 p-2 mt-4 rounded-md text-center text-sm cursor-pointer"
          onClick={signin}
        >
          Already have an account?{" "}
          <a className="text-blue-400 hover:text-blue-500 text-sm font-medium ml-1">
            sign in
          </a>
        </div>
      </form>
    </FormLayoutComponent>
  );
};

export default SignupComponent;
