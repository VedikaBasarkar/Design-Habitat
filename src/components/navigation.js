import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav className="font-mont text-secondary-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/logo/DH-logo-icon.svg"
              className="h-12"
              alt="Flowbite Logo"
            />
            <span className="self-center text-lg font-sans font-medium whitespace-nowrap">
              Design Habitat
            </span>
          </a>
          {/* <button
            dataCollapseToggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              ariaHidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
              <li>
                <a href="/about" className="block py-2 px-3 hover:text-secondary-400" aria-current="page">
                  About us
                </a>
              </li>
              <li>
                <a href="/courses" className="block py-2 px-3 hover:text-secondary-400">
                  Courses
                </a>
              </li>
              <li>
                <a href="/contact" className="block py-2 px-3 hover:text-secondary-400">
                  Contact
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
