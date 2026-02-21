import { clinicInfo } from '@/content/clinic';
import styles from './ContactPanel.module.css';

type Props = {
  showMap?: boolean;
  compact?: boolean;
};

export default function ContactPanel({ showMap = false, compact = false }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={`${styles.grid} ${compact ? styles.compact : ''}`}>
          <div className={styles.details}>
            <p className="eyebrow">Contact Us</p>
            <h2>Book Your Consultation</h2>
            <p>{clinicInfo.name}</p>
            <p>{clinicInfo.address}</p>
            <div className={styles.actions}>
              <a href={`tel:${clinicInfo.phoneDial}`}>
                <span className={styles.icon} aria-hidden>
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.6 11.6 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A18 18 0 0 1 3 5a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1c0 1.24.2 2.45.58 3.6a1 1 0 0 1-.24 1z" />
                  </svg>
                </span>
                <span>Call: {clinicInfo.phoneDisplay}</span>
              </a>
              <a href={`mailto:${clinicInfo.email}`}>
                <span className={styles.icon} aria-hidden>
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v.4L12 13 3 6.4z" />
                    <path d="M3 8.9V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.9l-8.42 6.18a1 1 0 0 1-1.16 0z" />
                  </svg>
                </span>
                <span>Email: {clinicInfo.email}</span>
              </a>
              <a href={clinicInfo.whatsapp} target="_blank" rel="noreferrer">
                <span className={styles.icon} aria-hidden>
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M12 2a10 10 0 0 0-8.7 14.94L2 22l5.2-1.3A10 10 0 1 0 12 2zm5.36 14.4c-.22.62-1.3 1.18-1.8 1.26-.46.08-1.03.12-3.35-.84-2.96-1.23-4.86-4.24-5-4.44-.14-.2-1.2-1.6-1.2-3.06 0-1.46.76-2.18 1.04-2.48.26-.28.56-.36.74-.36h.54c.16 0 .38-.06.58.42.22.54.74 1.88.8 2.02.06.14.1.3.02.48-.08.18-.12.3-.24.46-.12.14-.26.32-.38.42-.12.1-.24.22-.1.44.14.22.62 1.02 1.34 1.66.92.82 1.7 1.08 1.94 1.2.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.16 1.2z" />
                  </svg>
                </span>
                <span>WhatsApp Appointment</span>
              </a>
            </div>
          </div>
          {showMap && (
            <div className={styles.map}>
              <iframe
                src={clinicInfo.mapEmbed}
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Define Clinic map"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
