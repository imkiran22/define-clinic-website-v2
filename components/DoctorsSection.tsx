import Image from 'next/image';
import { doctors } from '@/content/clinic';
import styles from './DoctorsSection.module.css';

export default function DoctorsSection() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className="sectionTitleWrap">
          <p className="eyebrow">Our Doctors</p>
          <h2>Expert Team You Can Trust</h2>
        </div>

        <div className={styles.grid}>
          {doctors.map((doctor) => (
            <article key={doctor.name} className={styles.card}>
              {doctor.image ? (
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={360}
                  height={320}
                  className={styles.image}
                />
              ) : (
                <div className={styles.placeholder} aria-hidden>
                  {doctor.name
                    .replace('Dr ', '')
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
              )}

              <div className={styles.content}>
                <h3>{doctor.name}</h3>
                {doctor.role && <p className={styles.role}>{doctor.role}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
