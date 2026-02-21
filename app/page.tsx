import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid';
import ClinicIntro from '@/components/ClinicIntro';
import ContactPanel from '@/components/ContactPanel';
import DoctorsSection from '@/components/DoctorsSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServiceGrid />
      <ClinicIntro />
      <DoctorsSection />
      <ContactPanel showMap compact />
    </main>
  );
}
