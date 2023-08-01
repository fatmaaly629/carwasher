import React from "react";
import link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] max-auto flex justify-between items-center sm:px-16 px-6">
        <Link href="/" className="flex justify-between items-center">
          <Image
            src="/logo.svg"
            alt="car hub logo "
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="sign in "
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
