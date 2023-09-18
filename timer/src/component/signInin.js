// import '../App.css';
import React, { useState } from "react";
// import { auth } from "../firebase";
import SignUp from "./SignUp";
// import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate




const SignInin = () => {
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
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {signup ? "Sign Up" : "Sign In"}
              </h1>
              {signup ? (
            <SignUp />
          ) : (
              <form class="space-y-4 md:space-y-6" onSubmit={signIn} action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email"
                       id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="name@company.com" required=""
                       value={email}
                        onChange={(e) => setEmail(e.target.value)}
                       />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" 
                      id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      required=""
                      value={password}
                    onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <h5>Forgot password?</h5>
                  </div>
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">Sign in</button>
                  </form>
          )}
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
</section>
);
          };
export default SignInin;
 