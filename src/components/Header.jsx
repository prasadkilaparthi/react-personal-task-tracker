import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../FirebaseConfig";

const Header = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (e) {
      console.error("Logout failed:", e.message);
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 p-5 shadow-md">
      <nav className="container mx-auto flex justify-between items-center text-white">
        <div className="text-3xl font-bold">
          <Link to="/" className="hover:text-gray-200 transition duration-200">
            Task Tracker
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/dashboard" className="py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300">
                Dashboard
              </Link>
              <Link to="/profile" className="py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300">
                Profile
              </Link>
              <button onClick={handleLogout} className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                Sign Up
              </Link>
              <Link to="/login" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
