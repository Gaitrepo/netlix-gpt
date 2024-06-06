import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState("true");
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name=useRef(null);
  const navigate=useNavigate();

  const dispatch=useDispatch();
  const handleButtonClick = () => {
    //validate the data
    var message = validateData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);

    if (message) return;

    //SIgnUp/SIgnIn

    if (!isSignInForm) {
      //SignUp
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://scontent.fpat3-1.fna.fbcdn.net/v/t1.6435-1/61675222_306675743609844_8616397796771102720_n.jpg?stp=c16.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=C9t34rQ9VtMQ7kNvgEXl5O1&_nc_ht=scontent.fpat3-1.fna&oh=00_AYA1WSCmb6jn5urO3Vwmidymr8fcHuWs8iw5hRnMoeUrTQ&oe=66893C4E"
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));
            navigate("/browse");
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message);
          });
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, errorMessage);
          // ..
        });
    } else {
      //SignIn F
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });
    }

    //SignIn and SignUp

    // console.log(email.current.value);
    // console.log(password.current.value);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute w-3/12 p-12 bg-black my-60 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-65"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 m-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 m-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
        <button
          className="p-4 m-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? SignUp Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
