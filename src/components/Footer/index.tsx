"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white py-6 dark:bg-gray-dark">
        <div className="container flex justify-center items-center">
          <Link href="/" className="mr-4">
            <Image
              src="/images/logo/logop.png"
              alt="logo"
              className="inline-block"
              width={140}
              height={30}
            />
          </Link>
          <p className="text-base text-body-color dark:text-white">
            inerpulse LLP 2025
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
