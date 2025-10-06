import React from "react";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-red-500 uppercase">
      <div>
        <Link href="/">Massimo</Link>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
