import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

function MisiuneaSocialaNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-16 flex items-center transition-all duration-500 ${
          scrolled ? 'bg-[#070A12]/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center flex-shrink-0 mt-10 sm:mt-12 lg:mt-14">
            <img
              src="/ledvision_logo.png"
              alt="LED Vision Systems"
              className="h-20 sm:h-24 lg:h-36 xl:h-40 w-auto object-contain"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-[#B8C0D4] hover:text-[#2EE9FF] transition-colors text-sm font-medium">
              Acasă
            </Link>
            <Link to="/servicii" className="text-[#B8C0D4] hover:text-[#2EE9FF] transition-colors text-sm font-medium">
              Servicii
            </Link>
            <Link to="/misiunea-sociala" className="text-[#2EE9FF] font-medium text-sm">
              Misiunea socială
            </Link>
            <Link to="/#despre-noi" className="text-[#B8C0D4] hover:text-[#2EE9FF] transition-colors text-sm font-medium">
              Despre Noi
            </Link>
            <Link to="/#produse" className="text-[#B8C0D4] hover:text-[#2EE9FF] transition-colors text-sm font-medium">
              Produse
            </Link>
            <Link to="/#contact" className="text-[#B8C0D4] hover:text-[#2EE9FF] transition-colors text-sm font-medium">
              Contact
            </Link>
            <Link to="/#contact">
              <Button className="bg-[#2EE9FF] text-[#070A12] hover:bg-[#5EEDFF] font-semibold px-6">
                Cere ofertă
              </Button>
            </Link>
          </div>
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[99] bg-[#070A12]/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link to="/" className="text-2xl font-display font-semibold text-white hover:text-[#2EE9FF] transition-colors" onClick={() => setIsOpen(false)}>
            Acasă
          </Link>
          <Link to="/servicii" className="text-2xl font-display font-semibold text-white hover:text-[#2EE9FF] transition-colors" onClick={() => setIsOpen(false)}>
            Servicii
          </Link>
          <Link to="/misiunea-sociala" className="text-2xl font-display font-semibold text-[#2EE9FF]">
            Misiunea socială
          </Link>
          <Link to="/#despre-noi" className="text-2xl font-display font-semibold text-white hover:text-[#2EE9FF] transition-colors" onClick={() => setIsOpen(false)}>
            Despre Noi
          </Link>
          <Link to="/#produse" className="text-2xl font-display font-semibold text-white hover:text-[#2EE9FF] transition-colors" onClick={() => setIsOpen(false)}>
            Produse
          </Link>
          <Link to="/#contact" className="text-2xl font-display font-semibold text-white hover:text-[#2EE9FF] transition-colors" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link to="/#contact" onClick={() => setIsOpen(false)}>
            <Button className="mt-4 bg-[#2EE9FF] text-[#070A12] hover:bg-[#5EEDFF] font-semibold px-8 py-6 text-lg">
              Cere ofertă
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

function MisiuneaSocialaFooter() {
  return (
    <footer className="bg-[#070A12] border-t border-white/15 py-8">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/ledvision_logo.png" alt="LED Vision Systems" className="h-12 w-auto object-contain" />
          </Link>
          <p className="text-[#B8C0D4] text-sm">
            © {new Date().getFullYear()} LED Vision Systems. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#B8C0D4] hover:text-[#2EE9FF] transition-colors text-sm">
              Politica de confidențialitate
            </a>
            <a href="#" className="text-[#B8C0D4] hover:text-[#2EE9FF] transition-colors text-sm">
              Termeni și condiții
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function MisiuneaSociala() {
  const navigate = useNavigate();
  const scrollToContact = () => navigate('/#contact');

  return (
    <div className="relative bg-[#070A12] min-h-screen overflow-x-hidden" style={{ overflowY: 'visible' }}>
      <MisiuneaSocialaNav />

      {/* Hero - Misiunea socială */}
      <section className="min-h-screen min-h-[100dvh] w-full relative overflow-x-clip flex items-center pt-24 lg:pt-0">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(123, 31, 162, 0.25) 0%, rgba(7, 10, 18, 0.99) 50%, rgba(7, 10, 18, 1) 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(46, 233, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 233, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 w-full px-6 lg:px-12 py-24 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-[#2EE9FF] mb-4 flex items-center justify-center gap-2">
            <Heart className="w-4 h-4" /> CAUZĂ SOCIALĂ
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-8">
            Misiunea socială
          </h1>
          <p className="text-[#C8D0E0] text-lg lg:text-xl leading-relaxed">
            Misiunea socială a întreprinderii este de a sprijini copiii cu autism din mediul rural, oferindu-le acces real și constant la servicii de terapie specializată, educație adaptată și activități de integrare socială. Prin această intervenție, ne propunem să reducem inegalitățile de șanse cauzate de lipsa infrastructurii și a resurselor financiare, contribuind la dezvoltarea armonioasă și incluziunea durabilă a acestor copii în comunitate.
          </p>
          <Button
            onClick={scrollToContact}
            className="mt-10 bg-[#2EE9FF] text-[#070A12] hover:bg-[#5EEDFF] font-semibold px-8 py-6 rounded-xl"
          >
            Contactează-ne
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Finanțare - FSE */}
      <section className="relative py-20 lg:py-28 overflow-x-clip">
        <div className="absolute inset-0 bg-[#6A1B9A]" />
        <div className="absolute inset-0 bg-[url('/hero_screen.jpg')] bg-cover bg-center opacity-15 mix-blend-overlay" aria-hidden />
        <div className="relative z-10 px-6 lg:px-12 max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-white mb-8">
            Finanțare
          </h2>
          <div className="space-y-6 text-white/95">
            <p className="font-display font-semibold text-xl text-white">
              FONDUL SOCIAL EUROPEAN
            </p>
            <p className="font-semibold text-lg">
              Program Incluziune și Demnitate Socială
            </p>
            <p className="font-semibold">
              Prioritate 3. Protejarea dreptului la demnitate socială
            </p>
            <p className="text-sm leading-relaxed">
              Obiectiv specific ESO4.1 Îmbunătățirea accesului la piața muncii și măsuri de activare pentru toate persoanele aflate în căutarea unui loc de muncă, în special pentru tineri, în special prin implementarea Garanției pentru tineret, pentru șomerii de lungă durată și grupurile defavorizate de pe piața muncii și pentru persoanele inactive, precum și prin promovarea desfășurării de activități independente și a economiei sociale.
            </p>
            <p className="font-semibold text-[#2EE9FF]">
              Titlul proiectului: INSERT – Implementăm economia socială în mediul RURAL
            </p>
            <p className="text-sm font-mono text-white/80">
              Contract PIDS/83/PIDS_P3/OP4/ESO4.1/311822
            </p>
          </div>
        </div>
      </section>

      {/* Obiective sociale */}
      <section className="relative py-24 lg:py-32">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(46, 233, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 233, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 px-6 lg:px-12 max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-[#2EE9FF] mb-4">
            Obiective sociale
          </h2>
          <p className="text-[#B8C0D4] text-lg mb-12">
            Ne propunem următoarele tipuri de activități și obiective sociale:
          </p>

          <div className="space-y-10">
            <div className="bg-white/[0.06] border border-white/20 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#2EE9FF] text-[#070A12] font-display font-bold flex items-center justify-center">1</span>
                <h3 className="font-display font-semibold text-xl text-white">
                  Proiectul „Film în aer liber pentru o cauză bună”
                </h3>
              </div>
              <p className="text-[#C8D0E0] text-sm leading-relaxed">
                Un prim pilon important al intervenției îl reprezintă organizarea unui eveniment recurent – „Film în aer liber pentru o cauză bună” – ce va avea loc în parcările unor supermarketuri sau spații publice generoase, în parteneriat cu rețele comerciale și organizații non-guvernamentale. Menționăm faptul că acest proiect va utiliza echipamentele achiziționate în cadrul proiectului ca infrastructură de bază și vom avea ca parteneri firme specializate care să ofere sonorizare și alte dotări necesare. Mai mult, a existat o discuție cu reprezentanții unor cinematografe, prin care să ofere cu titlu gratuit licențele de difuzare a unor filme de interes pentru publicul larg.
              </p>
              <p className="text-[#C8D0E0] text-sm leading-relaxed mt-4">
                Evenimentul va avea un caracter caritabil, iar accesul se va face pe baza unei donații, urmând ca fondurile colectate să fie direcționate către ONG-uri care sprijină copiii cu autism. Printre organizațiile vizate pentru parteneriat se numără: Star of Hope România, Fundația Surâsul Albastru, Fundația Bethany, Salvați Copiii – Filiala Iași, și Asociația Națională pentru Copii și Adulți cu Autism din România (ANCAAR) – Iași. Ne propunem să organizăm două ediții ale acestui eveniment, în cele două sezoane estivale (vara anului 2026 și vara anului 2027), cu participare largă din partea comunității.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-white/20 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#2EE9FF] text-[#070A12] font-display font-bold flex items-center justify-center">2</span>
                <h3 className="font-display font-semibold text-xl text-white">
                  Parteneriat pentru autism
                </h3>
              </div>
              <p className="text-[#C8D0E0] text-sm leading-relaxed">
                În al doilea rând, întreprinderea socială va încheia minimum trei parteneriate directe cu ONG-uri de profil, cărora le va oferi gratuit serviciul de închiriere de ecrane LED, pentru organizarea propriilor campanii și evenimente dedicate sprijinirii copiilor cu TSA. Astfel, contribuim la creșterea vizibilității cauzei și la atragerea de noi resurse către aceste organizații. Din discuțiile cu organizațiile de profil s-au prefigurat o serie de evenimente pe care le putem susține, spre exemplu sprijin video (proiecție ecrane LED) pentru serbări organizate de Ziua Copilului – 1 iunie.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-white/20 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#2EE9FF] text-[#070A12] font-display font-bold flex items-center justify-center">3</span>
                <h3 className="font-display font-semibold text-xl text-white">
                  Programul „Terapie pentru copiii cu autism”
                </h3>
              </div>
              <p className="text-[#C8D0E0] text-sm leading-relaxed">
                Un alt element concret al impactului îl reprezintă decontarea parțială a terapiilor pentru copiii proveniți din familii fără posibilități financiare. Estimăm că, până la data de 31 august 2027, vom putea sprijini astfel minimum 50 de copii, contribuind la accesul lor la servicii esențiale precum logopedie, terapie comportamentală ABA, psihoterapie și integrare senzorială.
              </p>
            </div>

            <div className="bg-white/[0.06] border border-white/20 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#2EE9FF] text-[#070A12] font-display font-bold flex items-center justify-center">4</span>
                <h3 className="font-display font-semibold text-xl text-white">
                  „Dotează un spațiu pentru copii cu autism”
                </h3>
              </div>
              <p className="text-[#C8D0E0] text-sm leading-relaxed">
                Pe lângă aceste acțiuni directe, întreprinderea își propune ca, în parteneriat cu ONG-urile de profil, să contribuie la dotarea unei camere de terapie, într-un spațiu deja existent sau creat în cadrul uneia dintre organizațiile partenere. Aceasta va fi echipată cu materiale și dispozitive necesare pentru desfășurarea sesiunilor terapeutice, oferind astfel un sprijin concret și durabil pentru comunitate.
              </p>
            </div>
          </div>

          <p className="text-[#B8C0D4] text-base leading-relaxed mt-12">
            Prin aceste acțiuni, întreprinderea nu doar că își respectă misiunea socială, dar devine un catalizator pentru schimbare reală în comunitate, contribuind la creșterea incluziunii, la reducerea discriminării și la susținerea unor drepturi fundamentale pentru copiii cu TSA din județul Iași și din întreaga regiune de nord-est a țării.
          </p>
        </div>
      </section>

      {/* Cum facem acest lucru? */}
      <section className="relative py-24 lg:py-32 bg-[#0D1424]">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(46, 233, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 233, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 px-6 lg:px-12 max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-white mb-8">
            Cum facem acest lucru?
          </h2>
          <p className="text-[#B8C0D4] text-lg mb-10">
            Societatea <strong className="text-white">LEDVISION SYSTEMS S.R.L.</strong> respectă criteriile prevăzute la art. 8 alin. (4) din lege, respectiv criteriile definitorii ale întreprinderii sociale:
          </p>

          <ul className="space-y-4 text-[#C8D0E0] mb-12 list-none">
            <li className="flex gap-3">
              <span className="text-[#2EE9FF] font-bold">a)</span>
              acționează în scop social și/sau în interesul general al comunității;
            </li>
            <li className="flex gap-3">
              <span className="text-[#2EE9FF] font-bold">b)</span>
              alocă minimum 90% din profitul/excedentul realizat scopului social și rezervei statutare;
            </li>
            <li className="flex gap-3">
              <span className="text-[#2EE9FF] font-bold">c)</span>
              se obligă să transmită bunurile rămase în urma lichidării către una sau mai multe întreprinderi sociale.
            </li>
          </ul>

          <p className="text-[#B8C0D4] text-lg mb-6">
            Societatea LEDVISION SYSTEMS S.R.L. are la bază și funcționează după principiile economiei sociale:
          </p>

          <ul className="space-y-3 text-[#C8D0E0] text-sm">
            <li className="flex gap-3"><span className="text-[#2EE9FF]">a)</span> acordă prioritate individului și obiectivelor sociale față de creșterea profitului;</li>
            <li className="flex gap-3"><span className="text-[#2EE9FF]">b)</span> are la bază solidaritatea și responsabilitatea colectivă;</li>
            <li className="flex gap-3"><span className="text-[#2EE9FF]">c)</span> respectă convergența dintre interesele membrilor asociați și interesul general și/sau interesele unei colectivități;</li>
            <li className="flex gap-3"><span className="text-[#2EE9FF]">d)</span> există control democratic al membrilor, exercitat asupra activităților desfășurate;</li>
            <li className="flex gap-3"><span className="text-[#2EE9FF]">e)</span> are un caracter voluntar și liber al asocierii în formele de organizare specifice domeniului economiei sociale;</li>
            <li className="flex gap-3"><span className="text-[#2EE9FF]">f)</span> dispune de personalitate juridică distinctă, autonomie de gestiune și independență față de autoritățile publice;</li>
            <li className="flex gap-3"><span className="text-[#2EE9FF]">g)</span> respectă alocarea celei mai mari părți a profitului/excedentului financiar pentru atingerea obiectivelor;</li>
            <li className="flex gap-3"><span className="text-[#2EE9FF]">h)</span> susține un proces decizional transparent și responsabil în interesul colectivității pe care o deservește.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-[#070A12]">
        <div className="px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-display-3 text-white mb-4">
            Vrei să susții cauza?
          </h2>
          <p className="text-[#B8C0D4] text-lg mb-8">
            Contactează-ne pentru parteneriate sau informații despre proiectele noastre sociale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={scrollToContact}
              className="bg-[#2EE9FF] text-[#070A12] hover:bg-[#5EEDFF] font-semibold px-8 py-6 rounded-xl"
            >
              Contactează-ne
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <a href="mailto:contact@ledvisionsystems.ro" className="inline-flex items-center gap-2 text-[#2EE9FF] hover:text-[#5EEDFF] font-medium">
              <Mail className="w-5 h-5" />
              contact@ledvisionsystems.ro
            </a>
            <a href="tel:+40747159125" className="inline-flex items-center gap-2 text-[#2EE9FF] hover:text-[#5EEDFF] font-medium">
              <Phone className="w-5 h-5" />
              0747 159 125
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6 text-[#B8C0D4] text-sm">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Strada Biserica Sf. Neculai nr. 48, Miroslava - Iași, Romania
            </span>
          </div>
        </div>
      </section>

      <MisiuneaSocialaFooter />
    </div>
  );
}
