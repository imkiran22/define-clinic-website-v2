import ContactPanel from '@/components/ContactPanel';

export default function BookAppointmentPage() {
  return (
    <main>
      <section className="pageHero pageHeroAppointment">
        <div className="container">
          <p className="eyebrow">Book Appointment</p>
          <h1>Let’s Plan Your Consultation</h1>
          <p>
            Reach us by call, WhatsApp, or email. We will help you choose the right treatment pathway.
          </p>
        </div>
      </section>
      <ContactPanel showMap />
    </main>
  );
}
