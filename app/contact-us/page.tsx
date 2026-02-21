import ContactPanel from '@/components/ContactPanel';

export default function ContactPage() {
  return (
    <main>
      <section className="pageHero pageHeroContact">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Visit or Reach Out Today</h1>
          <p>
            We are located in Avadi. Use the map and direct contact links to connect with the clinic team.
          </p>
        </div>
      </section>
      <ContactPanel showMap />
    </main>
  );
}
