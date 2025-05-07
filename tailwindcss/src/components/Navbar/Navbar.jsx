import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-neutral shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
              MyBrand
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Services</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        )}
      </nav>

      {/* Card Section */}
      <div className="p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 max-w-md mx-auto mt-10">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              <svg className="h-6 w-6 stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </div>
          <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
            Writes upside-down
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
