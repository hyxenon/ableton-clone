import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 50) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <header className="w-[85%] bg-white flex flex-col">
      <nav className="px-6 py-4 flex items-center gap-8 border-b">
        <h1 className="font-serif font-bold text-3xl cursor-pointer">
          Ableton
        </h1>
        <ul className="flex gap-6">
          <li className="font-semibold text-xl cursor-pointer">Live</li>
          <li className="font-semibold text-xl cursor-pointer">Push</li>
          <li className="font-semibold text-xl cursor-pointer">Note</li>
          <li className="font-semibold text-xl cursor-pointer">Link</li>
          <li className="font-semibold text-xl cursor-pointer">Shop</li>
          <li className="font-semibold text-xl cursor-pointer">Packs</li>
          <li className="font-semibold text-xl cursor-pointer">Help</li>
          <li className="font-semibold text-xl cursor-pointer text-orange-500">
            More +
          </li>
        </ul>
        <h1 className="ml-auto text-blue-700 text-xl font-bold cursor-pointer">
          Try Live for free
        </h1>
        <h2 className="font-semibold cursor-pointer">Log in or register</h2>
      </nav>

      <div
        className={`px-6 py-4 duration-500 sticky ${
          navState ? "-translate-y-10 " : null
        }`}
      >
        <div className="flex gap-8 items-center">
          <h2 className="text-orange-600 font-semibold text-sm cursor-pointer">
            About
          </h2>
          <h2 className="font-semibold cursor-pointer">Jobs</h2>
          <h2 className="font-semibold cursor-pointer">Apprenticeships</h2>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
