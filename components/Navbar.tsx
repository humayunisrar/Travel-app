"use client";
import { useState } from 'react';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      </div>
      <ul className={`lg:hidden absolute bg-white top-full right-0 w-1/3 ${isMenuOpen ? 'block' : 'hidden'} shadow-lg rounded-lg border border-gray-200 z-40` }>
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="border-b border-gray-200">
            <Link href={link.href}>
              <div className="block py-3 px-6 text-gray-700 font-semibold hover:bg-gray-100">
                {link.label}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 cursor-pointer flexCenter pb-1.5 transition-all hover:font-bold "
          >
            {link.label}
          </Link>
        ))}

      </ul>

      <div className="lg:flexCenter hidden">
        <Button type="button" title="Log In" icon="/user.svg" variant="btn_dark_green" />
      </div>

      <div onClick={toggleMenu} className="lg:hidden cursor-pointer inline-block">
        <Image src="/menu.svg" alt="menu" width={32} height={32} />
      </div>
    </nav>
  );
};

export default Navbar;
