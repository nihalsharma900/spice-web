import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-red-600"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 4.97 7 11 7 11s7-6.03 7-11c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
          </svg>
          <span className="text-xl font-extrabold text-red-600">Karma Spices</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-red-600 transition">Home</Link>
          <Link to="/about" className="hover:text-red-600 transition">About</Link>
          <Link to="/products" className="hover:text-red-600 transition">Products</Link>
          <Link to="/contact" className="hover:text-red-600 transition">Contact</Link>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {!open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 border-t">
          <div className="flex flex-col px-6 py-4 space-y-3 text-gray-700 font-medium">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 hover:text-red-600 transition">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="py-2 hover:text-red-600 transition">About</Link>
            <Link to="/products" onClick={() => setOpen(false)} className="py-2 hover:text-red-600 transition">Productssssssss</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2 hover:text-red-600 transition">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
