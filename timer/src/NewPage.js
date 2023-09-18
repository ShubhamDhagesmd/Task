// import React from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import TimerApp from "./TimerApp";
import SignInin from "./component/signInin";

const NewPage = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
  {authUser ? (
    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
      <p class="text-xl font-semibold mb-4">{`Signed In as ${authUser.email}`}</p>
      <button
        class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-semibold focus:outline-none"
        onClick={userSignOut}
      >
        Sign Out
        
      </button>
      <TimerApp />
    </div>
  ) : (
    <p class="text-xl font-semibold">
    <SignInin/>
    </p>
  )}
</div>

  );
};
export default NewPage;
