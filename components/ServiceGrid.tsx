import Image from 'next/image';
import { treatmentCategories } from '@/content/clinic';
import styles from './ServiceGrid.module.css';

type Props = {
  detailed?: boolean;
};

export default function ServiceGrid({ detailed = false }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className="sectionTitleWrap">
          <p className="eyebrow">Our Services</p>
          <h2>Treatments Designed for Indian Skin and Hair Needs</h2>
        </div>
        <div className={styles.grid}>
          {treatmentCategories.map((category) => (
            <article key={category.key} className={styles.card}>
              <Image
                src={category.image}
                alt={category.label}
                width={560}
                height={360}
                className={styles.image}
              />
              <div className={styles.content}>
                <h3>{category.label}</h3>
                <p>{category.summary}</p>
                {detailed && (
                  <ul>
                    {category.treatments.map((treatment) => (
                      <li key={treatment}>{treatment}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
