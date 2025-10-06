import React from "react";
import Image from "next/image";
import Link from "next/link";

const CartIcon = () => {
  return (
    <Link href="/cart">
      <div className="relative w-8 h-8">
        <Image src="/cart.png" alt="Cart" width={24} height={24} />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;
