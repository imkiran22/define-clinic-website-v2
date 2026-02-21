import ServiceGrid from '@/components/ServiceGrid';

export default function ServicesPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Comprehensive Aesthetic Treatments</h1>
          <p>
            Explore our treatment categories and consultation-first approach for skin, hair, laser, and injectable care.
          </p>
        </div>
      </section>
      <ServiceGrid detailed />
    </main>
  );
}
