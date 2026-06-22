"use client";

import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "@/firebase/firebase.config";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/users/${currentUser.email}`);

        if (!res.ok) {
          setUser({
            ...currentUser,
            role: "user",
            membership: "free",
          });
          return;
        }

        const dbUser = await res.json();

        setUser({
          ...currentUser,
          role: dbUser?.role || "user",
          membership: dbUser?.membership || "free",
        });
      } catch (error) {
        console.log(error);

        setUser({
          ...currentUser,
          role: "user",
          membership: "free",
        });
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    googleLogin,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}