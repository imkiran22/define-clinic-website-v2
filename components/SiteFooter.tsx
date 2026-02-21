import { clinicInfo } from '@/content/clinic';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>{clinicInfo.name} ©2026 All rights reserved</p>
        <div className={styles.links}>
          <a href={clinicInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden>
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5z" />
              <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zM17.65 6.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
            </svg>
          </a>
          <a href={clinicInfo.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden>
              <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.25-1.46 1.5-1.46H17V5a26 26 0 0 0-2.4-.12c-2.38 0-4.1 1.45-4.1 4.12V11H8v3h2.5v8h3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
