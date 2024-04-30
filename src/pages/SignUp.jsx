import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({})


  const { user, SignUp } = useAuth()
  const navigagte = useNavigate()

  const handleFirebaseErrors = (code) => {
    switch (code) {
      case "auth/email-already-in-use":
        setError(prev => ({ ...prev, email: "The email address is already in use." }));
        break;
      case "auth/invalid-email":
        setError(prev => ({ ...prev, email: "The email address is not valid." }));
        break;
      case "auth/weak-password":
        setError(prev => ({ ...prev, password: "The password is too weak." }));
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError({});
    if (!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(userName)) {
      setError(prev => ({ ...prev, userName: "Name only contain alphabets" }));
      return;
    }
    if (!/^\d{10}$/.test(mobileNumber)) {
      setError(prev => ({ ...prev, mobileNumber: "Invalid number" }));
    }

    try {
      await SignUp(email, password, mobileNumber, userName)
      navigagte('/')
    } catch (error) {
      if (error.code) {
        console.log(error.code)
        handleFirebaseErrors(error.code);
      }
    }

  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up for account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <input
              id="userName"
              name="userName"
              type="text"
              autoComplete="userName"
              required
              className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm"
              value={userName}
              onChange={(e) => setUserName(e.target.value.trim())}
            />
            {error?.userName && <small className="text-red-400">{error?.userName}</small>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
            {error?.email && <small className="text-red-400">{error?.email}</small>}

          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              required
              className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value.trim())}
            />
            {error?.mobileNumber && <small className="text-red-400">{error?.mobileNumber}</small>}

          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error?.password && <small className="text-red-400">{error?.password}</small>}

          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-teal-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-800 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to='/login' className="text-teal-600 hover:text-teal-800">
            Log in
          </Link>
        </p>
      </div>



    </div>
  );
};

export default SignUp;
