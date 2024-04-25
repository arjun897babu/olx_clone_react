import React, { createContext, useContext, useEffect, useState } from "react"

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'


import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../services/firebase'

const AuthContext = createContext();

export function AuthContextProvider({ children }) {

  const [user, setUser] = useState({});

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => {
      unSubscribe()
    }

  }, [])

  function SignUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
  }
  function LogIn(email,password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  function LogOut() {
    signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, LogIn, SignUp, LogOut }} >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}