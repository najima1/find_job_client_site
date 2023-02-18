import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/ContextProvider";
import navLogo from "../../image/logo.png.webp";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const signoutHandelar = () => {
    logOutUser()
      .then(() => {
        toast.success("sign out success");
        navigate("/login");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="">
      <div className="px-1 fixed w-full z-20 bg-white">
        <nav className="relative ">
          <div className="container py-2 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <div>
                <Link
                  className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform  lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                  to=""
                >
                  <img className="w-full" src={navLogo} alt="" />
                </Link>
              </div>

              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setShowNav(!showNav)}
                  type="button"
                  className={
                    "text-gray-500 dark:text-gray-900 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  }
                >
                  {showNav ? (
                    <svg
                      x-show="!isOpen"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      x-show="isOpen"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/*
        <!-- Mobile Menu open: "block", Menu closed: "hidden"
        x-cloak :className="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" hidden md:block  --> */}
            <div
              className={
                showNav
                  ? "hidden md:block "
                  : "" +
                    "customNav absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-whitemd:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center delay-1000 bg-white"
              }
            >
              <div className="flex flex-col md:flex-row md:mx-6">
                <Link
                  className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:my-0 hover:bg-gray-200 p-2 px-6 text-[17px]"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:my-0 hover:bg-gray-200 p-2 px-6 rounded-sm text-[17px]"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:my-0 hover:bg-gray-200 p-2 px-6 rounded-sm text-[17px]"
                  to="/contack"
                >
                  Contact us
                </Link>
                {/* login & logout */}
                {user?.uid ? (
                  <button
                    onClick={signoutHandelar}
                    className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:my-0 hover:bg-gray-200 p-2 px-6 rounded-sm  text-[17px]"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link
                    className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:my-0 hover:bg-gray-200 p-2 px-6 rounded-sm text-[17px]"
                    to="/login"
                  >
                    Sign in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
