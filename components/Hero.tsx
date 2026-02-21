import Link from 'next/link';
import styles from './Hero.module.css';
import { clinicInfo } from '@/content/clinic';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.kicker}>Define Skin | Hair | Laser Clinic</p>
        <h1>{clinicInfo.tagline}</h1>
        <p>
          Expert-led aesthetic treatments in Avadi with thoughtful consultation and practical care plans.
        </p>
        <div className={styles.actions}>
          <Link href="/book-appointment" className={styles.primary}>
            Book Appointment
          </Link>
          <Link href="/services" className={styles.secondary}>
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
