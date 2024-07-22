import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data);
    setData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    })

    e.target.firstName.value = "";
    e.target.lastName.value = "";
    e.target.username.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
    e.target.confirmPassword.value = "";

  }

  const handleChange = (e) => {
    const name = e.target.name
    setData(() => ({...data, [name]: e.target.value}))
  }
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-20 py-10 flex flex-col items-center">
        <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
          Sign-Up
        </h1>
        <form action="#" className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex items-start flex-col justify-start">
            <label
              htmlFor="firstName"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={handleChange}
              placeholder="Es. Mario"
            />
          </div>

          <div className="flex items-start flex-col justify-start">
            <label
              htmlFor="lastName"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={handleChange}
              placeholder="Your lastname"

            />
          </div>

          <div className="flex items-start flex-col justify-start">
            <label
              htmlFor="username"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={handleChange}
              placeholder="Your username"

            />
          </div>

          <div className="flex items-start flex-col justify-start">
            <label
              htmlFor="email"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={handleChange}
              placeholder="Es. example@gmail.com"
            />
          </div>

          <div className="flex items-start flex-col justify-start">
            <label
              htmlFor="password"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={handleChange}
              placeholder="Your password"
            />
          </div>

          <div className="flex items-start flex-col justify-start">
            <label
              htmlFor="confirmPassword"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={handleChange}
              placeholder="Confirm your password"

            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            Already have an account?
          </span>
          <Link to="/login" className="text-blue-500 hover:text-blue-600">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
