import "./App.css";

const phone = "+306973752966";
const displayPhone = "697 37 52 966";
const email = "tsinaspantelis@gmail.com";

const services = [
  {
    title: "Υδρεύσεις",
    text: "Νέες εγκαταστάσεις νερού, αλλαγές σωληνώσεων και επισκευές με ασφαλή λειτουργία."
  },
  {
    title: "Αποχετεύσεις",
    text: "Ξεβουλώματα, επισκευές αποχέτευσης και αποκατάσταση προβλημάτων ροής."
  },
  {
    title: "Επισκευές βλαβών",
    text: "Άμεση αντιμετώπιση σε σπασίματα, τρεξίματα νερού και έκτακτες ζημιές."
  },
  {
    title: "Διαρροές",
    text: "Εντοπισμός και επισκευή διαρροών σε μπάνιο, κουζίνα, ταράτσα και σωληνώσεις."
  },
  {
    title: "Θερμοσίφωνες",
    text: "Τοποθέτηση, αντικατάσταση αντίστασης, service και σύνδεση θερμοσίφωνα."
  },
  {
    title: "Υδραυλικά κουζίνας",
    text: "Σύνδεση νεροχύτη, μπαταρίας, πλυντηρίου πιάτων και παροχών κουζίνας."
  },
  {
    title: "Εγκατάσταση ειδών υγιεινής",
    text: "Τοποθέτηση λεκάνης, νιπτήρα, μπαταριών, καζανάκι και αξεσουάρ μπάνιου."
  }
];

const areas = [
  "Κέντρο Αθήνας",
  "Περιστέρι",
  "Αιγάλεω",
  "Χαϊδάρι",
  "Καλλιθέα",
  "Πετρούπολη",
  "Μαρούσι",
  "Χαλάνδρι",
  "Ψυχικό",
  "Νεα Φιλαδέλφια",
  "Ίλιον",
  "Νέα Ιωνία",
  "Γαλάτσι",
  "Κηφισιά",
  "Νέο Ηράκλειο",
  "Άγιοι Ανάργυροι",
];

const benefits = [
  "Υδρεύσεις",
  "Αποχετεύσεις",
  "Θερμοσίφωνες",
  "Διαρροές",
  "Βλάβες",
  "Υδραυλικές εγκαταστάσεις",
];

function App() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <div className="brand">
            <img src="/logo.png" alt="Τσίνας Παντελής" className="logo" />
          </div>

          <nav>
            <a href="#services">Υπηρεσίες</a>
            <a href="#areas">Περιοχές</a>
            <a href="#contact">Επικοινωνία</a>
          </nav>

          <a className="navCall" href={`tel:${phone}`}>
            Κλήση τώρα
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container heroGrid">
          <div className="heroText">
            <div className="pill">24ωρη εξυπηρέτηση</div>

            <h1>
              Υδραυλικός στην Αθήνα για βλάβες και διαρροές
            </h1>

            <p>
              Υδρεύσεις, αποχετεύσεις, θερμοσίφωνες, διαρροές, βλάβες
              και υδραυλικές εγκαταστάσεις με άμεση
              ανταπόκριση.
            </p>

            <div className="heroBenefitsLine">
              {benefits.map((benefit) => (
                <span key={benefit}>✓ {benefit}</span>
              ))}
            </div>

            <div className="heroButtons">
              <a className="primaryBtn" href={`tel:${phone}`}>
                Καλέστε τώρα
              </a>

              <a
                className="secondaryBtn viberBtn"
                href="viber://chat?number=%2B306973752966"
              >
                Viber
              </a>

              <a
                className="secondaryBtn"
                href={`https://wa.me/${phone.replace("+", "")}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="heroCard">
            <div className="drop">💧</div>

            <h2>24ωρη εξυπηρέτηση</h2>

            <p>
              Επείγουσες βλάβες, διαρροές και υδραυλικές εργασίες.
            </p>

            <a href={`tel:${phone}`}>{displayPhone}</a>

            <small>{email}</small>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="sectionTitle">
            <span>Τι αναλαμβάνουμε</span>
            <h2>Υπηρεσίες</h2>
          </div>

          <div className="servicesGrid">
            {services.map((service) => (
              <article className="serviceCard" key={service}>
                <div className="icon">🔧</div>
                <h3>{service}</h3>

                <p>
                  Υπεύθυνη εξυπηρέτηση με σωστή διάγνωση, καθαρή εργασία και
                  άμεση ολοκλήρωση.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="section dark">
        <div className="container">
          <div className="sectionTitle light">
            <span>Πού εξυπηρετούμε</span>
            <h2>Περιοχές εξυπηρέτησης</h2>
          </div>

          <div className="areas">
            {areas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="container whyGrid">
          <div>
            <span className="miniTitle">Γιατί εμάς</span>

            <h2>Σωστή δουλειά χωρίς πρόχειρες λύσεις</h2>

            <p>
              Δίνουμε έμφαση στη σωστή επισκευή, στη λεπτομέρεια και στην
              αξιοπιστία ώστε το πρόβλημα να λυθεί οριστικά.
            </p>
          </div>

          <div className="whyList">
            <div>Άμεση επικοινωνία</div>
            <div>24ωρη εξυπηρέτηση</div>
            <div>Κατοικίες & επαγγελματικοί χώροι</div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container contactBox">
          <h2>Χρειάζεστε υδραυλικό στην Αθήνα;</h2>

          <p>
            Καλέστε τώρα ή στείλτε μήνυμα για άμεση εξυπηρέτηση.
          </p>

          <div className="contactActions">
            <a className="primaryBtn" href={`tel:${phone}`}>
              {displayPhone}
            </a>

            <a
              className="secondaryBtn white viberBtn"
              href="viber://chat?number=%2B306973752966"
            >
              Viber
            </a>

            <a
              className="secondaryBtn white"
              href={`https://wa.me/${phone.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a className="secondaryBtn white" href={`mailto:${email}`}>
              Email
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer">
          <p>© 2026 Υδραυλικές Εργασίες - Τσίνας Παντελής</p>
          <p>{displayPhone}</p>
        </div>
      </footer>

      <div className="floatingButtons">
        <a href={`tel:${phone}`} className="floatBtn callFloat">
          📞
        </a>

        <a
          href="viber://chat?number=%2B306973752966"
          className="floatBtn viberFloat"
        >
          💬
        </a>

        <a
          href={`https://wa.me/${phone.replace("+", "")}`}
          target="_blank"
          rel="noreferrer"
          className="floatBtn whatsappFloat"
        >
          🟢
        </a>
      </div>
    </main>
  );
}

export default App;
