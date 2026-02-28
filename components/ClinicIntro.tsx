import { aboutCopy, consultingHours, clinicInfo } from '@/content/clinic';
import styles from './ClinicIntro.module.css';

export default function ClinicIntro() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className="eyebrow">About Define</p>
            <h2>Trusted Aesthetic Care in Avadi</h2>
            {aboutCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className={styles.hours}>
              <h3>Consulting Hours</h3>
              <ul>
                {consultingHours.map((item) => (
                  <li key={item.day}>
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className={styles.founded}>Serving patients since {clinicInfo.foundedYear}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
