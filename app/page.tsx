import Hero from '@/components/Hero';
import ClinicIntro from '@/components/ClinicIntro';
import ContactPanel from '@/components/ContactPanel';
import DoctorsSection from '@/components/DoctorsSection';
import TrustHighlights from '@/components/TrustHighlights';
import ServiceExplorer from '@/components/ServiceExplorer';
import CareJourney from '@/components/CareJourney';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustHighlights />
      <ServiceExplorer />
      <CareJourney />
      <ClinicIntro />
      <DoctorsSection />
      <ContactPanel showMap compact />
    </main>
  );
}
