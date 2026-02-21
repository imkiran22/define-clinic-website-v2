import { clinicInfo } from '@/content/clinic';
import styles from './MobileBookingBar.module.css';

export default function MobileBookingBar() {
  return (
    <div className={styles.wrapper}>
      <a href={clinicInfo.whatsapp} target="_blank" rel="noreferrer" className={styles.primary}>
        WhatsApp Booking
      </a>
      <a href={`tel:${clinicInfo.phoneDial}`} className={styles.secondary}>
        Call Now
      </a>
    </div>
  );
}
