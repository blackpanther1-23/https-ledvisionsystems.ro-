import { Link, useNavigate } from 'react-router-dom';
import {
  AlertTriangle,
  Settings,
  Package,
  Lightbulb,
  ShoppingCart,
  MessageCircle,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  RefreshCw,
  CheckCircle,
  UserCircle,
  LayoutGrid,
  BarChart3,
  Truck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

function ServiciiNav() {
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
            <Link to="/servicii" className="text-[#2EE9FF] font-medium text-sm">
              Servicii
            </Link>
            <Link to="/misiunea-sociala" className="text-[#B8C0D4] hover:text-[#2EE9FF] transition-colors text-sm font-medium">
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
          <Link to="/servicii" className="text-2xl font-display font-semibold text-[#2EE9FF]">
            Servicii
          </Link>
          <Link to="/misiunea-sociala" className="text-2xl font-display font-semibold text-white hover:text-[#2EE9FF] transition-colors" onClick={() => setIsOpen(false)}>
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

function ServiciiFooter() {
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

export default function Servicii() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate('/#contact');
  };

  return (
    <div className="relative bg-[#070A12] min-h-screen overflow-x-hidden" style={{ overflowY: 'visible' }}>
      <ServiciiNav />

      {/* Ce putem să îți oferim? - Servicii în capul paginii */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-28" id="ce-oferim">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(46, 233, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 233, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
              Ce putem să îți oferim?
            </h2>
            <p className="text-[#B8C0D4] text-lg max-w-2xl mx-auto">
              Optimizează-ți experiența cu serviciile noastre de consultanță, oferind soluții personalizate pentru succes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: RefreshCw,
                title: 'Închiriere Ecrane LED Indoor/Outdoor de ultimă generație',
                description:
                  'Ecrane de înaltă rezoluție pentru evenimente în spații interioare — conferințe, expoziții, lansări de produse și prezentări corporate. Ecrane rezistente la intemperii, cu luminozitate puternică, ideale pentru evenimente în aer liber, festivaluri, târguri sau campanii publicitare.',
              },
              {
                icon: CheckCircle,
                title: 'Montaj & Configurare Tehnică',
                description:
                  'Echipa noastră asigură instalarea completă, calibrarea culorilor și testarea sistemului, pentru o imagine perfectă indiferent de locație.',
              },
              {
                icon: UserCircle,
                title: 'Asistență Tehnică pe Durata Evenimentului',
                description:
                  'Suport tehnic permanent în timpul evenimentului, pentru siguranța și continuitatea transmisiei vizuale.',
              },
              {
                icon: LayoutGrid,
                title: 'Soluții Personalizate de Afișaj',
                description:
                  'Oferim configurații flexibile - de la panouri standard la ecrane modulare, adaptate spațiului și nevoilor fiecărui client.',
              },
              {
                icon: BarChart3,
                title: 'Consultanță',
                description:
                  'Echipa noastră oferă consultanță pentru ca evenimentul tău să fie unul de succes.',
              },
              {
                icon: Truck,
                title: 'Transport și Logistică Rapidă',
                description:
                  'Livrare promptă în toată țara, cu echipamente ambalate profesional și echipă specializată pentru montaj rapid și sigur.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.06] border border-[#2EE9FF]/30 rounded-2xl p-6 lg:p-8 hover:border-[#2EE9FF]/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-[#2EE9FF]/20 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-[#2EE9FF]" />
                </div>
                <h3 className="font-display font-semibold text-lg lg:text-xl text-[#2EE9FF] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#B8C0D4] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero - Căutăm cea mai bună soluție */}
      <section className="min-h-screen min-h-[100dvh] w-full relative overflow-x-clip flex items-center pt-24 lg:pt-0">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 40, 80, 0.98) 0%, rgba(7, 10, 18, 0.99) 50%, rgba(7, 10, 18, 1) 100%)',
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
        <div className="relative z-10 w-full px-6 lg:px-12 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-[50%] max-w-2xl">
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Căutăm cea mai bună soluție pentru dumneavoastră
            </h1>
            <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-8">
              Într-o primă etapă ne dorim să configurăm cea mai bună soluție (calitate/preț) pentru evenimentul dumneavoastră. Ne axăm foarte mult pe calitate și experiența pe care o poate livra LED Display pentru eveniment. Este necesar ca în prima etapă să ne furnizați câteva elemente esențiale: tipul evenimentului, data, locația, ce vă doriți etc. Vă răspundem în maxim 24 de ore!
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-white text-[#070A12] hover:bg-white/90 font-semibold px-8 py-6 rounded-xl"
            >
              Scrie aici...
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="w-full lg:w-[45%] relative">
            <div className="text-white/40 text-sm space-y-1 font-mono absolute right-0 top-0 lg:top-4">
              <p>500mm×500mm cabinet, 7.5kg/panel</p>
              <p>➤ 500mm×1000mm cabinet, 12.5kg/panel</p>
            </div>
            <img
              src="/hero_screen.jpg"
              alt="Panou LED modular"
              className="w-full max-w-lg ml-auto mt-12 lg:mt-16 rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Închiriere LED Display - albastru */}
      <section className="relative py-20 lg:py-28 overflow-x-clip">
        <div className="absolute inset-0 bg-[#007bff]" />
        <div className="absolute inset-0 bg-[url('/hero_screen.jpg')] bg-cover bg-right opacity-20 mix-blend-overlay" aria-hidden />
        <div className="relative z-10 px-6 lg:px-12 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-[60%]">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-6">
              Închiriere LED Display
            </h2>
            <p className="text-white/95 text-lg leading-relaxed max-w-2xl">
              Închirierea ecranelor LED Display se poate realiza în funcție de configurația evenimentului (ore, zile, necesar de m² de ecran).
            </p>
          </div>
          <div className="hidden lg:block w-[35%] h-64 bg-white/10 rounded-2xl backdrop-blur-sm" />
        </div>
      </section>

      {/* Calitate și performanță - Unilumin URMIII 3.9 */}
      <section className="relative py-24 lg:py-32">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(46, 233, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 233, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 px-6 lg:px-12 max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-[#2EE9FF] mb-6">
            Calitate și performanță
          </h2>
          <p className="text-[#C8D0E0] text-lg leading-relaxed mb-12 max-w-4xl">
            Ecranul LED Unilumin URMIII 3.9 este o soluție premium pentru evenimente indoor și outdoor, conceput pentru afișaj de înaltă calitate și performanță vizuală impecabilă. Cu o rezoluție excelentă și un design modular, sistemul permite montaj rapid, flexibil și sigur, fiind ideal pentru conferințe, festivaluri, concerte, târguri sau campanii publicitare.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display font-semibold text-lg text-[#2EE9FF] mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Specificații tehnice:
              </h3>
              <ul className="space-y-2 text-[#C8D0E0] text-sm">
                <li className="flex gap-2">
                  <span className="text-[#2EE9FF]">➤</span>
                  <strong>Tehnologie LED:</strong> SMD1921
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2EE9FF]">➤</span>
                  <strong>Rezoluție cabinet:</strong> 128 × 256 pixeli
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2EE9FF]">➤</span>
                  <strong>Dimensiune cabinet:</strong> 500 × 1000 × 71 mm
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2EE9FF]">➤</span>
                  <strong>Rezoluție totală ecran (30 mp):</strong> 2.211.840 pixeli
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2EE9FF]">➤</span>
                  <strong>Luminozitate:</strong> 4.500 nits (vizibilitate excelentă chiar și în lumină puternică)
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2EE9FF]">➤</span>
                  <strong>Rată de refresh:</strong> 7.680 Hz (imagine fluidă, fără flicker)
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2EE9FF]">➤</span>
                  <strong>Gray Scale:</strong> 14 bit (culori fine, naturale)
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2EE9FF]">➤</span>
                  <strong>Grad de protecție:</strong> IP65 (rezistent la apă și praf — utilizabil în exterior)
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2EE9FF]">➤</span>
                  <strong>Greutate:</strong> 14.6 kg/panou
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-display font-semibold text-lg text-[#2EE9FF] mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Sistem de control profesional
                </h3>
                <p className="text-[#C8D0E0] text-sm leading-relaxed">
                  Echipat cu Novastar A8S-N receiving card și opțional controller VX1000, sistemul permite control precis, sincronic și stabil al imaginii, ideal pentru proiecții live sau transmisii video de mare calitate.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-[#2EE9FF] mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Structură modulară și accesorii premium
                </h3>
                <ul className="space-y-2 text-[#C8D0E0] text-sm">
                  <li className="flex gap-2">
                    <span className="text-[#2EE9FF]">➤</span>
                    <strong>Flybar 1-in-1 Dual System</strong> — pentru montaj suspendat sau pe sol
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2EE9FF]">➤</span>
                    <strong>Ground Beam Support & Vertical Frame</strong> — suporturi reglabile pentru fixare stabilă
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2EE9FF]">➤</span>
                    <strong>Reinforced Crossbars</strong> — bare transversale ajustabile (0.7–1.3 m)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2EE9FF]">➤</span>
                    <strong>Flight Case-uri profesionale</strong> — transport sigur (5 panouri per cutie)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2EE9FF]">➤</span>
                    <strong>Cablu semnal + cablu alimentare + cutii PSU dedicate</strong> — siguranță maximă la instalare
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2EE9FF]">➤</span>
                    <strong>Componente de protecție</strong> (top/bottom edge, safety rope, positioning pin) — protejează echipamentele în timpul transportului și montajului
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <div className="bg-white/[0.06] border border-white/20 rounded-2xl p-6 lg:p-8">
              <h3 className="font-display font-semibold text-lg text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#2EE9FF]" />
                Beneficii principale
              </h3>
              <ul className="space-y-2 text-[#C8D0E0] text-sm">
                <li>• Montaj rapid și flexibil datorită sistemului modular de 500×1000 mm.</li>
                <li>• Calitate de imagine excepțională — luminozitate, contrast și refresh superior.</li>
                <li>• Compatibilitate completă cu software Novastar și control la distanță.</li>
                <li>• Transport sigur în flight-case-uri dedicate.</li>
                <li>• Perfect pentru evenimente corporate, concerte, expoziții, târguri, campanii publicitare.</li>
              </ul>
            </div>
            <div className="bg-white/[0.06] border border-white/20 rounded-2xl p-6 lg:p-8">
              <h3 className="font-display font-semibold text-lg text-white mb-4 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-[#2EE9FF]" />
                Accesorii și piese de schimb incluse
              </h3>
              <p className="text-[#C8D0E0] text-sm leading-relaxed">
                Fiecare pachet de închiriere conține piese de rezervă (module LED, cabluri, alimentare, conectori) pentru a asigura funcționarea impecabilă a ecranului pe durata evenimentului.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resursa Umană de Calitate - albastru */}
      <section className="relative py-20 lg:py-28 overflow-x-clip">
        <div className="absolute inset-0 bg-[#007bff]" />
        <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-[url('/hero_screen.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" aria-hidden />
        <div className="relative z-10 px-6 lg:px-12 max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-6">
            RESURSA UMANĂ DE CALITATE
          </h2>
          <p className="text-white/95 text-lg leading-relaxed max-w-3xl mb-10">
            Echipa noastră este formată din specialiști cu experiență în domeniul audiovizual, montaj și operare tehnică, care asigură derularea impecabilă a fiecărui proiect — indiferent de complexitate sau locație.
          </p>
          <p className="text-white/95 font-medium mb-4 flex items-center gap-2">
            <span className="text-white">◆</span> Ce oferim:
          </p>
          <ul className="space-y-6 text-white/95 text-base max-w-3xl">
            <li>
              <strong>Montaj complet la locație</strong> — echipa noastră se ocupă de asamblarea, conectarea și testarea ecranelor LED, pentru ca tu să nu îți faci griji pentru partea tehnică.
            </li>
            <li>
              <strong>Asistență tehnică pe toată durata evenimentului</strong> — un tehnician dedicat rămâne la fața locului, monitorizând funcționarea echipamentelor și intervenind prompt dacă este necesar.
            </li>
            <li>
              <strong>Consultanță personalizată înainte de eveniment</strong> — îți oferim sprijin în alegerea celei mai potrivite configurații de ecran, în funcție de spațiu, conținut și tipul publicului.
            </li>
            <li>
              <strong>Transport și logistică</strong> — echipamentele sunt livrate cu mijloace proprii, în flight-case-uri profesionale, pentru siguranță maximă și eficiență.
            </li>
            <li>
              <strong>Demontează și preluare la finalul evenimentului</strong> — ne ocupăm integral de strângerea și ambalarea echipamentelor, astfel încât tu să rămâi doar cu rezultatul vizibil: un eveniment reușit.
            </li>
          </ul>
          <div className="mt-12 pl-6 border-l-4 border-white/80">
            <p className="text-white/95 flex items-start gap-2">
              <MessageCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>
                <strong>În esență:</strong> Cu LED Vision Systems, nu închiriezi doar echipamente – închiriezi <em>expertiză, profesionalism și siguranță</em>. De la primul cablu conectat până la ultimul cadru proiectat, echipa noastră este mereu acolo, pentru ca fiecare detaliu să funcționeze perfect.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Echipa noastră */}
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
          <h2 className="font-display font-bold text-3xl text-[#007bff] mb-4">
            Echipa noastră
          </h2>
          <p className="text-[#B8C0D4] text-lg mb-12 max-w-2xl">
            O echipă tânără, dinamică și pasionată de tehnologie. Ne asigurăm că fiecare proiect strălucește — la propriu și la figurat.
          </p>
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <div className="p-8 text-center">
              <p className="font-mono text-xs tracking-widest uppercase text-[#64748b] mb-2">
                MANAGER GENERAL
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#6A1B9A] to-[#4A148C] p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center text-white font-display font-bold text-2xl flex-shrink-0">
                DC
              </div>
              <div className="text-center sm:text-left">
                <p className="font-display font-bold text-xl text-white uppercase tracking-wide">
                  Dalban Cosmina
                </p>
                <p className="text-white/90 text-sm mt-1">
                  Administrator LED Vision Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-20 bg-[#0D1424]">
        <div className="px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-display-3 text-white mb-4">
            Ai nevoie de o ofertă?
          </h2>
          <p className="text-[#B8C0D4] text-lg mb-8">
            Contactează-ne și îți răspundem în maxim 24 de ore.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={scrollToContact}
              className="bg-[#2EE9FF] text-[#070A12] hover:bg-[#5EEDFF] font-semibold px-8 py-6 rounded-xl"
            >
              Cere ofertă
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
              Str. Biserica Sf. Neculai 48, Miroslava, Iași
            </span>
          </div>
        </div>
      </section>

      <ServiciiFooter />
    </div>
  );
}
