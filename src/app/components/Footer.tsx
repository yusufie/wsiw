import React from "react";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col gap-2 border-t border-slate-700 p-4 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
      <span>© 2023 What Should I Watch. All rights reserved.</span>

      <div className="flex gap-4">
        <Link href="/contact-us">Contact Us</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/termsof-use">Terms Of Use</Link>
      </div>

     
    </footer>
  );
};

export default Footer;
