import React, {useState} from 'react'
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Create() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createAccount = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        
    }
    
  return (
    <div>
      <form onSubmit={createAccount}> 
        <h1>Create a New Account</h1>
        <input type="text" placeholder="Enter your Email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter your Password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
        <button>Create</button>
      </form>
    </div>
  )
}
