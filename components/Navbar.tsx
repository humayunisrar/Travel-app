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
      <div onClick={() => {window.location.href = '/';}} style={{ cursor: 'pointer' }}>
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </div>
      <ul className={`hidden h-full gap-12 lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link legacyBehavior href={link.href}>
              <a className="regular-16 text-gray-50 cursor-pointer flexCenter pb-1.5 transition-all hover:font-bold">
                {link.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button type="button" title="Log In" icon="/user.svg" variant="btn_dark_green" />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="lg:hidden cursor-pointer inline-block"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
