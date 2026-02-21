 'use client';

import Image from 'next/image';
import { useState } from 'react';
import { treatmentCategories } from '@/content/clinic';
import styles from './ServiceGrid.module.css';

type Props = {
  detailed?: boolean;
  expandedKey?: string | null;
  onToggle?: (key: string | null) => void;
};

export default function ServiceGrid({ detailed = false, expandedKey, onToggle }: Props) {
  const [internalExpandedKey, setInternalExpandedKey] = useState<string | null>(null);
  const activeKey = expandedKey ?? internalExpandedKey;

  const toggleCard = (key: string) => {
    const nextKey = activeKey === key ? null : key;
    if (onToggle) {
      onToggle(nextKey);
      return;
    }
    setInternalExpandedKey(nextKey);
  };

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className="sectionTitleWrap">
          <p className="eyebrow">Our Services</p>
          <h2>Treatments Designed for Indian Skin and Hair Needs</h2>
        </div>
        <div className={styles.grid}>
          {treatmentCategories.map((category) => {
            const isExpanded = activeKey === category.key;

            const card = (
              <article id={category.key} className={styles.card}>
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
                  <p className={styles.cardHint}>
                    {isExpanded ? 'Tap to collapse' : detailed ? 'Tap to view full treatment list' : 'Tap to view treatments'}
                  </p>
                  {isExpanded && (
                    <ul id={`treatments-${category.key}`}>
                      {category.treatments.map((treatment) => (
                        <li key={treatment}>{treatment}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            );

            return (
              <button
                key={category.key}
                type="button"
                className={styles.cardLink}
                onClick={() => toggleCard(category.key)}
                aria-expanded={isExpanded}
                aria-controls={`treatments-${category.key}`}
              >
                {card}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
