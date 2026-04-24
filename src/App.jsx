import "./App.css";

const phone = "+306973752966";
const displayPhone = "697 37 52 966";
const email = "tsinaspantelis@gmail.com";

const services = [
  "Υδρεύσεις",
  "Αποχετεύσεις",
  "Επισκευές βλαβών",
  "Διαρροές",
  "Θερμοσίφωνες",
  "Ανακαινίσεις μπάνιου",
  "Υδραυλικά κουζίνας",
  "Εγκατάσταση ειδών υγιεινής",
];

const areas = [
  "Κέντρο Αθήνας",
  "Περιστέρι",
  "Αιγάλεω",
  "Χαϊδάρι",
  "Καλλιθέα",
  "Νέα Σμύρνη",
  "Μαρούσι",
  "Χαλάνδρι",
  "Γλυφάδα",
  "Πειραιάς",
  "Ίλιον",
  "Νέα Ιωνία",
  "Παγκράτι",
  "Κηφισιά",
  "Όλη Αττική",
];

function App() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <div className="brand">
            <span>Υδραυλικές Εργασίες</span>
            <strong>Τσίνας Παντελής</strong>
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
            <div className="pill">24ωρη εξυπηρέτηση σε όλη την Αττική</div>

            <h1>
              Υδραυλικός στην Αθήνα για βλάβες, διαρροές και ανακαινίσεις
            </h1>

            <p>
              Υδρεύσεις, αποχετεύσεις, θερμοσίφωνες, διαρροές, βλάβες,
              ανακαινίσεις μπάνιου και υδραυλικές εγκαταστάσεις με άμεση
              ανταπόκριση σε όλη την Αττική.
            </p>

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

            <div className="trust">
              <span>✓ Άμεση ανταπόκριση</span>
              <span>✓ Καθαρή εργασία</span>
              <span>✓ Τίμιες τιμές</span>
            </div>
          </div>

          <div className="heroCard">
            <div className="drop">💧</div>

            <h2>24ωρη εξυπηρέτηση</h2>

            <p>
              Επείγουσες βλάβες, διαρροές και υδραυλικές εργασίες σε όλη την
              Αττική.
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
            <div>Όλη Αττική</div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container contactBox">
          <h2>Χρειάζεστε υδραυλικό στην Αθήνα;</h2>

          <p>
            Καλέστε τώρα ή στείλτε μήνυμα για άμεση εξυπηρέτηση σε όλη την
            Αττική.
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

      {/* Floating Buttons */}
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