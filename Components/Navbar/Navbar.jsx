import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="container mx-auto shadow-sm flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Logo</h1>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
