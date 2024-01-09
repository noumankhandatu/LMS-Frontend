// Registration.js

import React, { useState } from "react";
import { toast } from "react-toastify";
import AppUrl from "@/app/utils/config";

const SignUp = ({ setRoute }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!email || !name || !password) {
      return alert("Please enter all required fields");
    }

    try {
      const response = await AppUrl.post("/register", {
        email,
        name,
        password,
      });

      console.log("Server Response:", response);

      if (response.status === 201) {
        console.log("Registration successful");
        toast.success("Registration successful. Please log in.");
        setRoute("verification");
        // Optionally, you can redirect the user to the login page or handle success in your application.
      } else {
        console.error("Registration failed. Server returned status:", response.status);
      }
    } catch (error) {
      if (error.response) {
        console.error(
          "Server responded with an error:",
          error.response.status,
          error.response.data.message
        );
        toast.error(error.response.data.message);
      } else {
        console.error("An unexpected error occurred during registration:", error.message);
        toast.error("An unexpected error occurred during registration");
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-black p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleRegistration}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          >
            Register
          </button>
        </form>
        <button
          onClick={() => setRoute("login")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
        >
          Already have an account? Log in
        </button>
      </div>
    </div>
  );
};

export default SignUp;
