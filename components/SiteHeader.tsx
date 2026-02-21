import Link from 'next/link';
import Image from 'next/image';
import styles from './SiteHeader.module.css';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/book-appointment', label: 'Book Appointment' },
  { href: '/contact-us', label: 'Contact' }
];

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Define Clinic Home">
          <Image src="/logo.jpg" alt="Define Clinic logo" width={56} height={56} />
          <span>Define Clinic</span>
        </Link>
        <nav aria-label="Primary navigation">
          <ul className={styles.menu}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
