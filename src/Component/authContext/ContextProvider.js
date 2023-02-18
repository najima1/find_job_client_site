import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase'

export const AuthContext = createContext()
const auth = getAuth(app)


const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const users = { name: 'mohammed naizm' }

    // loging user with email password
    const loginUserEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //create user with email & password
    const createUserEmailAndPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign out user 
    const logOutUser = () => {
        return signOut(auth)
        setLoading(true)
    }

    //get user in firebase
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoading(false)
        })

        return () => { return unsubscribe() }
    }, [])


    const userInfo = { user, setLoading, loading, createUserEmailAndPassword, loginUserEmailPassword, logOutUser }
    return (

        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>

    )
}

export default ContextProvider