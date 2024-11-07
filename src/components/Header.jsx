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
      console.log(e.message);
    }
  };
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link to="/" className="hover:text-gray-300">
            Task Tracker
          </Link>
        </div>
        <div>
          {user ? (
            <>
              <Link to="/dashboard" className="mr-4 hover:bg-gray-300">
                Dashboard
              </Link>
              <Link to="profile" className="mr-4 hover:bg-gray-300">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-white hover:bg-gray-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="signup" className="mr-4 hover:text-gray-300">
                Sign up
              </Link>
              <Link to="login" className="mr-4 hover:text-gray-300">
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
