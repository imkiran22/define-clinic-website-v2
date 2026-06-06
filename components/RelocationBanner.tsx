'use client';

import { useEffect, useState } from 'react';
import styles from './RelocationBanner.module.css';
import { clinicInfo, relocation } from '@/content/clinic';

export default function RelocationBanner() {
  const [hydrated, setHydrated] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      if (window.localStorage.getItem(relocation.dismissKey) === '1') {
        setDismissed(true);
      }
    } catch {
      // localStorage unavailable (private mode, etc.) — banner just stays visible
    }
  }, []);

  if (!relocation.active || dismissed) {
    return null;
  }

  const handleDismiss = () => {
    setDismissed(true);
    try {
      window.localStorage.setItem(relocation.dismissKey, '1');
    } catch {
      // ignore
    }
  };

  return (
    <aside
      className={styles.banner}
      role="region"
      aria-label="Clinic relocation announcement"
      // Prevent hydration mismatch flash: render on server, but only respond to dismiss state after mount
      data-hydrated={hydrated ? 'true' : 'false'}
    >
      <div className={styles.inner}>
        <p className={styles.message}>
          <strong>{relocation.headline}</strong>
          <span className={styles.timing}>{relocation.timing}</span>, our new address is:{' '}
          <span className={styles.address}>{clinicInfo.address}</span>
        </p>
        <a
          className={styles.cta}
          href={relocation.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get directions →
        </a>
        <button
          type="button"
          className={styles.dismiss}
          onClick={handleDismiss}
          aria-label="Dismiss relocation announcement"
        >
          <svg viewBox="0 0 24 24" className={styles.dismissIcon} aria-hidden>
            <path d="M6 6L18 18" />
            <path d="M18 6L6 18" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
