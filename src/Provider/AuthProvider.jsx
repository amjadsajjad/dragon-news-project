import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // loader state for problem solve to redirect home page when refresh
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email,password)
    }

    // sign in user
    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }
    // logout user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // observe user by onAuthStateChange
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log('user in the auth state changed',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = { user,createUser,signInUser,logOut, loading }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;
