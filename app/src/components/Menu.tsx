"use client";

import React from "react";
import Image from "next/image";

const Menu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      {!open ? (
        <Image
          src="/menu.png"
          alt="Menu"
          width={20}
          height={20}
          className="w-full h-auto rounded-lg mb-4"
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="Close"
          width={20}
          height={20}
          className="w-full h-auto rounded-lg mb-4"
          onClick={() => setOpen(false)}
        />
      )}
      <div></div>
    </div>
  );
};

export default Menu;
