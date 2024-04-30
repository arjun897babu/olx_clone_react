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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unsubscribe();

  }, [])

  async function SignUp(email, password, mobileNumber, userName) {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, 'users', email), {
        favProducts: [],
        sellerName: userName,
        c_number: mobileNumber
      })
      return
    } catch (error) {
      console.log(error)
      throw error
    }

  }

  async function LogIn(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      return
    } catch (error) {
      throw error
    }
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