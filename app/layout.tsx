import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import MobileBookingBar from '@/components/MobileBookingBar';
import RelocationBanner from '@/components/RelocationBanner';
import { clinicInfo } from '@/content/clinic';

export const metadata: Metadata = {
  title: 'Define Skin Hair & Laser Clinic',
  description: 'Define Clinic in Avadi offers skin, hair, laser, and injectable treatments with personalized consultations.',
  applicationName: clinicInfo.name,
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <RelocationBanner />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileBookingBar />
      </body>
    </html>
  );
}
