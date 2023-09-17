// import React from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import TimerApp from "./TimerApp";

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
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
          <TimerApp/>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};
export default NewPage;
