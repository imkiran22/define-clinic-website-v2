import styles from './CareJourney.module.css';

const steps = [
  {
    title: '1. Share Your Concern',
    body: 'Tell us your goals through call or WhatsApp so we can prepare for your visit.'
  },
  {
    title: '2. In-Clinic Assessment',
    body: 'Doctor-led skin or hair evaluation with clear treatment recommendations.'
  },
  {
    title: '3. Structured Follow-Up',
    body: 'Progress tracking, session planning, and practical home-care guidance.'
  }
];

export default function CareJourney() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className="sectionTitleWrap">
          <p className="eyebrow">Care Journey</p>
          <h2>Simple, Transparent, and Consistent</h2>
        </div>
        <div className={styles.grid}>
          {steps.map((step) => (
            <article key={step.title} className={styles.card}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
