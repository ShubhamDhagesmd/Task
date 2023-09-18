import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import '../App.css';



const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  


  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
  <section class="bg-gray-50 dark:bg-gray-900">
  {/* <div class="flex flex-col items-center justify-center px-1 py-8 mx-auto md:h-screen lg:py-0"> */}
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              
              <form class="space-y-4 md:space-y-6" onSubmit={signUp} action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-large text-gray-900 dark:text-white">Your email</label>
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
                  
                  <button type="submit"  class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">Sign up
                  
                  </button>
                  </form>
          
          
              
          </div>
      </div>
  {/* </div> */}
</section>













  );
};


export default SignUp;