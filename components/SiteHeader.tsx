 'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './SiteHeader.module.css';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/book-appointment', label: 'Book Appointment' },
  { href: '/contact-us', label: 'Contact' }
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Define Clinic Home">
          <Image src="/logo.jpg" alt="Define Clinic logo" width={56} height={56} />
          <span>Define Clinic</span>
        </Link>
        <button
          className={styles.menuToggle}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className={styles.menuIcon} aria-hidden>
              <path d="M6 6L18 18" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className={styles.menuIcon} aria-hidden>
              <path d="M4 7H20" />
              <path d="M4 12H20" />
              <path d="M4 17H20" />
            </svg>
          )}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
        >
          <ul className={styles.menu}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
