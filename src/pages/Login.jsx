import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const { user, LogIn } = useAuth();
  const navigate = useNavigate();

  const handleLoginError = (code) => {
    switch (code) {
      case "auth/invalid-email":
        setError(prev => ({ ...prev, email: "The email address is not valid." }));
        break;
      case "auth/wrong-password":
        setError(prev => ({ ...prev, password: "The password is incorrect." }));
        break;
      default:
        setError({ invalid: "Invalid login credentials." });
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      await LogIn(email, password)
      navigate('/')

    } catch (error) {
      if (error.code) {
        handleLoginError(error.code)
      }
    }

  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center capitalize text-2xl font-bold leading-9 tracking-tight text-gray-900">
          log in
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
        {error?.invalid && <p className="text-center"><small className="capitalize text-red-500"> {error.invalid}</small></p>}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error?.email && <small className="text-red-400">{error?.email}</small>}

            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>

            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error?.password && <small className="text-red-400">{error?.password}</small>}

          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-teal-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-950"
            >
              log in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link to='/signup' className="text-teal-600 hover:text-teal-800">
            sign up
          </Link>
        </p>
      </div>
    </div>
  );
};


export default Login