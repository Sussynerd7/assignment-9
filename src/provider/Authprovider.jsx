import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebaseinit';
import { toast } from 'react-toastify';

export const AuthContext = createContext(null);
const gooo = new GoogleAuthProvider();
const Authprovider = ({ children }) => {
    const [user, setUser] = useState({});
    console.log(user)
    const [iconload, seticonload] = useState(true);

    const createUser = (email, password) => {
        seticonload(true);
        toast("Account was created")
        
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const resetpass = (email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    const goo = () => {
        seticonload(true);
        toast("You logged in")

        return signInWithPopup(auth, gooo);
    }

    const updateUser = (updatedData) => {

        return updateProfile(auth.currentUser, updatedData);
    };

    const signinUser = (email, password) => {
        seticonload(true);
        toast("You logged in")

        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (curruser) => {
            setUser(curruser);
            seticonload(false); 
        });

        return () => {
            unsubscribe();
        }
    }, []); 

    const signout = () => {
        toast("You logged out")
        return signOut(auth)
    }
    const authData = {
        user,
        resetpass,
        signinUser,
        setUser,
        createUser,
        updateUser,
        signout,
        goo,
        iconload, 
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;