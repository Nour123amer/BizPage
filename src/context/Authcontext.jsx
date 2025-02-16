import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword , onAuthStateChanged ,signOut ,signInWithEmailAndPassword, sendPasswordResetEmail, updateEmail, updatePassword}  from 'firebase/auth'
import React from 'react'
//import firebase from './../../node_modules/@firebase/app-compat/dist/app-compat-public.d';
import {auth} from "../firebase";
// import firebase from 'firebase/app';
import 'firebase/auth';  // Import the services you need
import 'firebase/firestore';

const Authcontext = createContext();


export const AuthProvider = ({children}) => {
    const [currentUser ,setCurrentUser] = useState();
    const signup =(email ,password)=>{
       return createUserWithEmailAndPassword(auth ,email, password);
    }

    const logOut = () =>{
      return signOut(auth);
    }

    const login = (email ,password) =>{
     return signInWithEmailAndPassword(auth ,email ,password)
    }

    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth ,email)
    }

    const updateUserEmail = (email) =>{
        return updateEmail(auth.currentUser ,email)
    }

    const updateUserPassword = (password) =>{
        return updatePassword(auth.currentUser ,password)
    }
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth ,(user)=>{
            setCurrentUser(user);
        })

        return ()=>{
            unsubscribe();
        }
    }
    ,[])
  return (
   <Authcontext.Provider value={{currentUser ,signup ,logOut ,login ,resetPassword ,updateUserEmail ,updateUserPassword}}>
    {children}
   </Authcontext.Provider>
  )
}


export const useAuth =()=>{
    return useContext(Authcontext);
}
