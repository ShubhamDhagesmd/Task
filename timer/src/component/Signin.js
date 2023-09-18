import React, { useState } from "react";
// import { auth } from "../firebase";
import SignUp from "./SignUp";
// import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../App.css';


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);
//   const navigate = useNavigate();
const navigate = useNavigate(); // Create a navigate function


const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/new-page"); // Replace "/new-page" with the desired route
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignUpClick = () => {
    setSignup(true);
  };

  const handleSignInClick = () => {
    setSignup(false);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-center mb-4">
            {signup ? "Sign Up" : "Sign In"}
          </h3>
          <div className="flex justify-end space-x-2 mb-4">
            <span className="text-blue-600">
              <i className="fab fa-facebook-square"></i>
            </span>
            <span className="text-red-600">
              <i className="fab fa-google-plus-square"></i>
            </span>
            <span className="text-blue-400">
              <i className="fab fa-twitter-square"></i>
            </span>
          </div>
          {signup ? (
            <SignUp />
          ) : (
            <form onSubmit={signIn}>
              <div className="mb-4">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <i className="fas fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="w-full pl-10 pr-3 py-2 border rounded-lg"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <i className="fas fa-key"></i>
                  </span>
                  <input
                    type="password"
                    className="w-full pl-10 pr-3 py-2 border rounded-lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                <label>Remember Me</label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Login
                </button>
              </div>
            </form>
          )}
          <div className="mt-4 text-center">
            <div className="mb-2">
              {signup ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={handleSignInClick}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={handleSignUpClick}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
