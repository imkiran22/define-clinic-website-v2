import ClinicIntro from '@/components/ClinicIntro';
import ContactPanel from '@/components/ContactPanel';

export default function AboutPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>Care Built on Expertise and Trust</h1>
          <p>
            Define Clinic focuses on practical, personalized aesthetic care with modern technology and clear treatment planning.
          </p>
        </div>
      </section>
      <ClinicIntro />
      <ContactPanel compact />
    </main>
  );
}
