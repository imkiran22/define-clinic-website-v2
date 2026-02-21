'use client';

import { useState } from 'react';
import ServiceGrid from './ServiceGrid';
import styles from './ServiceExplorer.module.css';

const concernMap = [
  { label: 'Hair Fall', key: 'hair_treatments' },
  { label: 'Acne & Marks', key: 'skin_treatments' },
  { label: 'Unwanted Hair', key: 'laser_treatments' },
  { label: 'Anti-Aging', key: 'injectable_treatments' }
];

export default function ServiceExplorer() {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const handleConcernClick = (key: string) => {
    setExpandedKey((current) => (current === key ? null : key));
    setTimeout(() => {
      document.getElementById(key)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 20);
  };

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.concernPanel}>
          <p className="eyebrow">Quick Start</p>
          <h2>Choose Your Primary Concern</h2>
          <div className={styles.chips}>
            {concernMap.map((item) => (
              <button
                key={item.key}
                type="button"
                className={`${styles.chip} ${expandedKey === item.key ? styles.chipActive : ''}`}
                onClick={() => handleConcernClick(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <ServiceGrid expandedKey={expandedKey} onToggle={setExpandedKey} />
    </section>
  );
}
