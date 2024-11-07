import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created Successfully!!");
      navigate("/login");
      setError("")
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border mb-2"
          required
        />
        <input
          type="password"
          placeholder="Enter Strong password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border mb-2"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 ">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
