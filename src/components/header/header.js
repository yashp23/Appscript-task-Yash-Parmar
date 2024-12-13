'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import Image from 'next/image';

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To toggle menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.root}>
      <div className={styles.topMargin}>
        <p>lorem ipsum dolor</p>
        <p>lorem ipsum dolor</p>
        <p>lorem ipsum dolor</p>
      </div>
      <div className={styles.uninavbar}>
        <div className={styles.uni}>
          <div className={styles.logo}>
            <Image src='/LOGO.png' alt='logo' width={70} height={60} />
          </div>
          <div className={styles.header}>
            <h1>LOGO</h1>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.icons}>
              <CiSearch className={styles.icon} />
              <CiHeart className={styles.icon} />
              <CiShoppingCart className={styles.icon} />
              <CiUser className={styles.icon} />
              <select className={styles.languageDropdown}>
                <option value="eng">ENG</option>
                <option value="hin">HIN</option>
                <option value="guj">GUJ</option>
              </select>
            </div>
            {/* Hamburger Icon for Mobile */}
            <div className={styles.hamburger} onClick={toggleMenu}>
              ☰
            </div>
          </div>
        </div>


        {/* Desktop Navbar */}
        <nav className={styles.navbar}>
          <ul className={styles.navLinks}>
            <li><Link href="/shop">SHOP</Link></li>
            <li><Link href="/skill">SKILLS</Link></li>
            <li><Link href="/stories">STORIES</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/contact">CONTACT US</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Headers;
