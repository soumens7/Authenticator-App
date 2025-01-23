import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loginAccount = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }
    setIsSubmitting(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        console.log("User logged in");
      })
      .catch((error) => {
        alert("Login failed. Please check your credentials.");
        console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("User logged out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <form onSubmit={loginAccount}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isSubmitting}>
          {isSubmitting ? "Logging In..." : "Log In"}
        </button>
      </form>
      {user ? (
        <div>
          <p>Welcome {user.email}</p>
          <button onClick={logOut}>Logout</button>
        </div>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
}
