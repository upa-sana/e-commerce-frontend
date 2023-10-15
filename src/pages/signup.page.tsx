import { DevTool } from "@hookform/devtools";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormLayoutComponent from "../layout/form-layout.page";
import TitleComponent from "../shared/components/title.page";
const SignupComponent = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    role: "User",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "User",
      contacts: [{ number: "" }],
      age: 0,
      date: Date(),
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "contacts",
    control: control,
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

  const signin = () => {
    navigate("/sign-in");
  };

  const onSubmit = (data) => {
    debugger;
    console.log("sign up data", data);
  };
  return (
    <FormLayoutComponent>
      <form className="form p-3" onSubmit={handleSubmit(onSubmit)} noValidate>
        <fieldset>
          <legend>
            <TitleComponent title={"Sign up"}></TitleComponent>
          </legend>

          <div className="font-extrabold text-sm mb-2">
            <label className="label mb-3" for="fullName">
              Name
            </label>
            <input
              className="
              border 
              border-solid
              border-gray-400 
              rounded-md h-10 w-full mt-1
              hover:border-yellow-300
              focus:border-yellow-300
              active:border-yellow-300 p-4"
              placeholder="Enter your name"
              type="text"
              id="fullName"
              {...register("name", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
            <p className="text-red-500">{errors.name?.message}</p>
          </div>
          <div className="font-extrabold text-sm mb-2">
            <label className="label" for="email">
              Email
            </label>
            <input
              className="
              border
              border-solid
              border-gray-400
              rounded-md 
              h-10 w-full mt-1
              hover:border-yellow-300
              focus:border-yellow-300
              :border-yellow-300 p-4"
              placeholder="Enter your email"
              type="text"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9.-]+@[a-z]+.[a-z]{2,3}$/,
                  message: "Invalid Email",
                },
              })}
            />
          </div>

          <div className="font-extrabold text-sm mb-2">
            <label className="label" for="password">
              Password
            </label>
            <input
              className="
              border
              border-solid gray-400 rounded-md
              h-10 w-full mt-1
             hover:border-yellow-300
             focus:border-yellow-300
             active:border-yellow-300 p-4"
              placeholder="Enter your password"
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
            />
          </div>
          <div className="font-extrabold text-sm mb-2">
            <label className="label" for="role" aria-label="Role of the user">
              Role
            </label>
            <select
              className="
              border border-solid border-gray-400
              rounded-md
              h-10 w-full mt-1
              hover:border-yellow-300
              focus:border-yellow-300
              active:border-yellow-300
              p-4"
              id="role"
              {...register("role", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
            <p className="text-red-500">{errors.role?.message}</p>
          </div>

          <div className="font-extrabold text-sm mb-2">
            <label className="label">
              <span className="mr-3"> Contacts </span>
              <button
                className="btn-yellow"
                onClick={() => append({ number: "" })}
              >
                +
              </button>
            </label>
            <div className="list">
              {fields.map((field, index) => {
                return (
                  <>
                    <div key={field.id} className="flex gap-3 my-3">
                      <input
                        className=" 
                    border
              border-solid gray-400 rounded-md
              h-10 w-full mt-1
             hover:border-yellow-300
             focus:border-yellow-300
             active:border-yellow-300 p-4"
                        type="text"
                        {...register(`contacts.${index}.number`)}
                      />
                      {index > 0 && (
                        <button
                          className="btn-default border "
                          type="button"
                          onClick={() => remove(index)}
                        >
                          -
                        </button>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="font-extrabold text-sm mb-2">
            <label className="label mb-3" htmlFor="fullName">
              Age
            </label>
            <input
              className="
              border 
              border-solid
              border-gray-400 
              rounded-md h-10 w-full mt-1
              hover:border-yellow-300
              focus:border-yellow-300
              active:border-yellow-300 p-4"
              placeholder="Enter your name"
              type="text"
              id="age"
              {...register("age", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
            <p className="text-red-500">{errors.name?.message}</p>
          </div>

          <div className="font-extrabold text-sm mb-2">
            <label className="label mb-3" htmlFor="date">
              Date of Birth
            </label>
            <input
              className="
              border 
              border-solid
              border-gray-400 
              rounded-md h-10 w-full mt-1
              hover:border-yellow-300
              focus:border-yellow-300
              active:border-yellow-300 p-4"
              placeholder="Enter your name"
              type="text"
              id="date"
              {...register("date", {
                required: {
                  valueAsDate: true,
                  value: true,
                  message: "Required",
                },
              })}
            />
            <p className="text-red-500">{errors.name?.message}</p>
          </div>

          <div className="buttons">
            <button
              type="submit"
              className="
              bg-yellow-300
              text-gray-800
              w-full p-2 mr-2
              rounded-lg
              hover:bg-yellow-400"
              name="submit-btn"
            >
              Sign up
            </button>
          </div>
          <div
            role="button"
            aria-label="Have an already account"
            className="
            border border-solid border-gray-300
            p-2 mt-4
            rounded-md
            text-center 
            text-sm
            cursor-pointer"
            onClick={signin}
          >
            Already have an account?
            <button
              aria-label="sign in to e-commerce"
              className="
              text-blue-400
              hover:text-blue-500
              text-sm
              font-medium 
              ml-1"
            >
              sign in
            </button>
          </div>
        </fieldset>
      </form>
      <DevTool control={control} />
    </FormLayoutComponent>
  );
};

export default SignupComponent;

// valueAsNumber: true
// valueAsDate: true
// watching the filed for changes:
