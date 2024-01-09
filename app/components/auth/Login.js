import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useLoginMutation } from "@/app/redux/feature/auth/authApi";

const Login = ({ setRoute }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isError }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Please enter email and password");

    try {
      const { data } = await login({ email, password });

      // Assuming the response structure includes accessToken and user
      const { accessToken, user } = data;

      // dispatch(userLoggedIn({ accessToken, user }));
      console.log("Login successful");
    } catch (error) {
      if (isError) {
        toast.error("An error occurred during login");
      } else {
        toast.error(error.response.data.message);
      }
      console.error("An error occurred during login", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-black p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <button
          onClick={() => setRoute("signup")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
