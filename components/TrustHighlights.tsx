import styles from './TrustHighlights.module.css';

const points = [
  { label: 'Established', value: 'Since 2022' },
  { label: 'Care Model', value: 'Consultation First' },
  { label: 'Location', value: 'Avadi, Chennai' },
  { label: 'Support', value: 'WhatsApp Booking' }
];

export default function TrustHighlights() {
  return (
    <section className={styles.wrapper} aria-label="Clinic highlights">
      <div className="container">
        <div className={styles.grid}>
          {points.map((point) => (
            <article key={point.label} className={styles.card}>
              <p>{point.label}</p>
              <h3>{point.value}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
