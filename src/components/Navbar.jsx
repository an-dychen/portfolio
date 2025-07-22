import React from 'react'

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div
          onClick={() => scrollTo("home")}
          className="text-xl font-bold cursor-pointer"
        >
          Andy Chen
        </div>

        <div className="space-x-6 hidden md:block">
          <button onClick={() => scrollTo("home")} className="hover:text-blue-500">
            Home
          </button>
          <button onClick={() => scrollTo("projects")} className="hover:text-blue-500">
            Projects
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:text-blue-500">
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
