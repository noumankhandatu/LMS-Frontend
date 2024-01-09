// Verification.js

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Verification = ({ setRoute }) => {
  const [otp, setOtp] = useState("");

  const handleVerification = async () => {
    if (otp.length !== 4) {
      return toast.error("Please enter a valid 4-digit OTP.");
    }

    const payload = {
      activationCode: otp,
      activationToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJub3VtYW4iLCJlbWFpbCI6Im5vdW1hbmtoYW42MTkuOTE1QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFA3VnJTREhqcUVtcmw5YTA5SXZQZnVOSmV5NDVhM3IxOXp5ZlBpV0ZRUVVXcjM0WlU1cWxpIn0sImFjdGl2YXRpb25Db2RlIjoiNDI0MyIsImlhdCI6MTcwMzU4ODYyNCwiZXhwIjoxNzAzNTg4OTI0fQ.U9xbNWac9z5WdM_Mcv6QNRrhKyniQZcePcwn1nCc8jQ",
    };

    try {
      const response = await axios.post("http://localhost:9000/api/v1/activate-user", payload);

      if (response.status === 201) {
        toast.success("User activation successful!");
        setRoute("signin");
        // Add your logic for handling successful activation
      } else {
        toast.error("User activation failed. Please try again.");
        // Add your logic for handling failed activation
      }
    } catch (error) {
      toast.error("An error occurred during user activation. Please try again.");
      console.error("Error during user activation:", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-black p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Verification</h2>
        <p className="mb-4">Enter the 4-digit OTP sent to your email:</p>
        <div className="flex space-x-2 mb-4">
          {[1, 2, 3, 4].map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-1/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={otp[index] || ""}
              onChange={(e) => {
                const newOtp = otp.split("");
                newOtp[index] = e.target.value;
                setOtp(newOtp.join(""));
              }}
            />
          ))}
        </div>
        <button
          onClick={handleVerification}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Verification;
