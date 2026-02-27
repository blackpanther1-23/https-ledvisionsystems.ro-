import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Menu, X, Phone, Mail, MapPin, ChevronRight, 
  Monitor, Settings, Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] h-16 flex items-center transition-all duration-500 overflow-visible ${
          scrolled ? 'bg-[#070A12]/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between h-16">
          <a href="#" className="flex items-center flex-shrink-0 mt-10 sm:mt-12 lg:mt-14">
            <img
              src="/ledvision_logo.png"
              alt="LED Vision Systems"
              className="h-20 sm:h-24 lg:h-36 xl:h-40 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('servicii')} className="text-[#B8C0D4] hover:text-[#2EE9FF] transition-colors text-sm font-medium">
              Servicii
            </button>
            <button onClick={() => scrollToSection('produse')} className="text-[#B8C0D4] hover:text-[#2EE9FF] transition-colors text-sm font-medium">
              Produse
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[#B8C0D4] hover:text-[#2EE9FF] transition-colors text-sm font-medium">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#2EE9FF] text-[#070A12] hover:bg-[#5EEDFF] font-semibold px-6"
            >
              Cere ofertă
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[99] bg-[#070A12]/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button onClick={() => scrollToSection('servicii')} className="text-2xl font-display font-semibold text-white hover:text-[#2EE9FF] transition-colors">
            Servicii
          </button>
          <button onClick={() => scrollToSection('produse')} className="text-2xl font-display font-semibold text-white hover:text-[#2EE9FF] transition-colors">
            Produse
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-2xl font-display font-semibold text-white hover:text-[#2EE9FF] transition-colors">
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="mt-4 bg-[#2EE9FF] text-[#070A12] hover:bg-[#5EEDFF] font-semibold px-8 py-6 text-lg"
          >
            Cere ofertă
          </Button>
        </div>
      </div>
    </>
  );
}

// Pinned Section Component
interface PinnedSectionProps {
  id: string;
  label: string;
  headline: string;
  subheadline: string;
  cta: string;
  image: string;
  imagePosition: 'left' | 'right';
  zIndex: number;
}

function PinnedSection({ 
  id, label, headline, subheadline, cta, image, imagePosition, zIndex 
}: PinnedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const imageEl = imageRef.current;
    const contentEl = contentRef.current;
    if (!section || !imageEl || !contentEl) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.5,
          onLeaveBack: () => {
            gsap.set([imageEl, contentEl], { opacity: 1, x: 0, scale: 1 });
          }
        }
      });

      const imageStartX = imagePosition === 'right' ? '60vw' : '-60vw';
      const contentStartX = imagePosition === 'right' ? '-40vw' : '40vw';
      const imageEndX = imagePosition === 'right' ? '10vw' : '-10vw';
      const contentEndX = imagePosition === 'right' ? '-14vw' : '14vw';

      tl.fromTo(imageEl, 
        { x: imageStartX, scale: 1.12, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0
      );
      tl.fromTo(contentEl,
        { x: contentStartX, opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      tl.to(imageEl,
        { x: imageEndX, scale: 1.06, opacity: 0.4, ease: 'power2.in' },
        0.70
      );
      tl.to(contentEl,
        { x: contentEndX, opacity: 0.35, ease: 'power2.in' },
        0.70
      );

      tl.to([imageEl, contentEl], 
        { opacity: 0, ease: 'power2.in' },
        0.92
      );

    }, section);

    return () => ctx.revert();
  }, [imagePosition]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id={id}
      className="h-screen w-screen relative overflow-hidden bg-[#070A12]"
      style={{ zIndex }}
    >
      {/* Light vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(7, 10, 18, 0.4) 100%)' }} />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ 
        backgroundImage: 'linear-gradient(rgba(46, 233, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 233, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Image - smaller and positioned better */}
      <div 
        ref={imageRef}
        className={`absolute ${imagePosition === 'right' 
          ? 'right-[5vw] top-[15vh] w-[55vw] h-[70vh]' 
          : 'left-[5vw] top-[15vh] w-[55vw] h-[70vh]'
        }`}
      >
        <img 
          src={image} 
          alt={headline}
          className="w-full h-full object-cover rounded-2xl"
          style={{ boxShadow: '0 24px 70px rgba(0, 0, 0, 0.5)' }}
        />
      </div>

      {/* Content - with background for readability */}
      <div 
        ref={contentRef}
        className={`absolute ${imagePosition === 'right' 
          ? 'left-[8vw] top-[22vh] w-[42vw]' 
          : 'right-[8vw] top-[22vh] w-[42vw]'
        }`}
      >
        <span className="font-mono text-xs tracking-[0.12em] uppercase text-[#2EE9FF] mb-4 block">{label}</span>
        <h1 className="font-display font-bold text-display-1 text-white mb-6" style={{ textShadow: '0 2px 30px rgba(0,0,0,0.8)' }}>
          {headline}
        </h1>
        <p className="text-[#C8D0E0] text-lg leading-relaxed mb-8" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.6)' }}>
          {subheadline}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button 
            onClick={scrollToContact}
            className="bg-[#2EE9FF] text-[#070A12] hover:bg-[#5EEDFF] font-semibold px-8 py-6 text-base rounded-xl"
            style={{ boxShadow: '0 0 30px rgba(46, 233, 255, 0.25)' }}
          >
            {cta}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <button 
            onClick={scrollToContact}
            className="text-[#2EE9FF] hover:text-[#5EEDFF] font-medium px-4 py-2 transition-colors"
          >
            Cere ofertă
          </button>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.service-title',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.service-title',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.service-card',
        { y: 60, scale: 0.98, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.service-cards',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Monitor,
      title: 'Rental evenimente',
      description: 'Ecrane LED, procesare video și echipament de playback pentru conferințe, concerte și târguri.',
      image: '/service_rental.jpg'
    },
    {
      icon: Settings,
      title: 'Montaj și configurare',
      description: 'Instalare rapidă, calibrare culori și testare completă la fața locului.',
      image: '/service_install.jpg'
    },
    {
      icon: Wrench,
      title: 'Suport tehnic',
      description: 'Asistență în timpul evenimentului și intervenție rapidă dacă apare ceva.',
      image: '/service_support.jpg'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="servicii"
      className="relative bg-[#070A12] py-24 lg:py-32"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ 
        backgroundImage: 'linear-gradient(rgba(46, 233, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 233, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="service-title mb-16">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-[#2EE9FF] mb-4 block">SERVICII</span>
          <h2 className="font-display font-bold text-display-2 text-white mb-4">
            Servicii complete
          </h2>
          <p className="text-[#B8C0D4] text-lg max-w-2xl">
            Oferim tot ce ai nevoie pentru un eveniment cu impact vizual maxim.
          </p>
        </div>

        <div className="service-cards grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group relative bg-white/[0.08] border border-white/20 rounded-2xl overflow-hidden hover:border-[#2EE9FF]/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-[#2EE9FF]/15 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#2EE9FF]" />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-[#B8C0D4] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Products Section
function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.product-title',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.product-title',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.product-card',
        { y: 60, scale: 0.98, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.product-cards',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const products = [
    {
      title: 'Panou LED Indoor P2.6',
      description: 'Imagine fină, unghi larg, ideal pentru săli și expoziții.',
      specs: 'Pitch 2.6mm • 800 nits • 3840Hz',
      image: '/product_indoor.jpg'
    },
    {
      title: 'Panou LED Outdoor P3.9',
      description: 'Rezistent la apă și praf, luminozitate ridicată, construit pentru exterior.',
      specs: 'Pitch 3.9mm • 4500 nits • IP65',
      image: '/product_outdoor.jpg'
    },
    {
      title: 'Procesare video & Controller',
      description: 'Switcher, scalare, mapping și playback stabil—totul integrat.',
      specs: '4K • HDMI/SDI • Genlock',
      image: '/product_controller.jpg'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="produse"
      className="relative bg-[#070A12] py-24 lg:py-32"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ 
        backgroundImage: 'linear-gradient(rgba(46, 233, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 233, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="product-title mb-16">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-[#2EE9FF] mb-4 block">PRODUSE</span>
          <h2 className="font-display font-bold text-display-2 text-white mb-4">
            Produse
          </h2>
          <p className="text-[#B8C0D4] text-lg max-w-2xl">
            Panouri LED modulare și accesorii pentru orice scenariu.
          </p>
        </div>

        <div className="product-cards grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="product-card group relative bg-white/[0.08] border border-white/20 rounded-2xl overflow-hidden hover:border-[#2EE9FF]/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-white mb-2 relative inline-block">
                  {product.title}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2EE9FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </h3>
                <p className="text-[#B8C0D4] text-sm leading-relaxed mb-3">
                  {product.description}
                </p>
                <span className="font-mono text-xs text-[#2EE9FF]">
                  {product.specs}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mulțumim! Vă vom contacta în curând.');
  };

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="relative bg-[#0D1424] py-24 lg:py-32"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ 
        backgroundImage: 'linear-gradient(rgba(46, 233, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 233, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="contact-content relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <span className="font-mono text-xs tracking-[0.12em] uppercase text-[#2EE9FF] mb-4 block">CONTACT</span>
            <h2 className="font-display font-bold text-display-2 text-white mb-4">
              Hai să vorbim.
            </h2>
            <p className="text-[#B8C0D4] text-lg mb-10">
              Spune-ne ce eveniment pregătești și îți trimitem o ofertă în 24h.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2EE9FF]/15 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#2EE9FF]" />
                </div>
                <div>
                  <span className="text-[#B8C0D4] text-sm block">Email</span>
                  <a href="mailto:contact@ledvisionsystems.ro" className="text-white hover:text-[#2EE9FF] transition-colors">
                    contact@ledvisionsystems.ro
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2EE9FF]/15 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#2EE9FF]" />
                </div>
                <div>
                  <span className="text-[#B8C0D4] text-sm block">Telefon</span>
                  <a href="tel:+40747159125" className="text-white hover:text-[#2EE9FF] transition-colors">
                    0747 159 125
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2EE9FF]/15 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#2EE9FF]" />
                </div>
                <div>
                  <span className="text-[#B8C0D4] text-sm block">Adresă</span>
                  <span className="text-white">
                    Str. Biserica Sf. Neculai 48, Miroslava, Iași
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/[0.08] border border-white/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[#B8C0D4] text-sm mb-2 block">Nume</label>
                  <Input 
                    placeholder="Numele tău"
                    className="bg-white/10 border-white/20 text-white placeholder:text-[#B8C0D4]/60 focus:border-[#2EE9FF]"
                  />
                </div>
                <div>
                  <label className="text-[#B8C0D4] text-sm mb-2 block">Email</label>
                  <Input 
                    type="email"
                    placeholder="email@exemplu.ro"
                    className="bg-white/10 border-white/20 text-white placeholder:text-[#B8C0D4]/60 focus:border-[#2EE9FF]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[#B8C0D4] text-sm mb-2 block">Telefon</label>
                  <Input 
                    type="tel"
                    placeholder="07xx xxx xxx"
                    className="bg-white/10 border-white/20 text-white placeholder:text-[#B8C0D4]/60 focus:border-[#2EE9FF]"
                  />
                </div>
                <div>
                  <label className="text-[#B8C0D4] text-sm mb-2 block">Tip eveniment</label>
                  <Input 
                    placeholder="Conferință, concert, etc."
                    className="bg-white/10 border-white/20 text-white placeholder:text-[#B8C0D4]/60 focus:border-[#2EE9FF]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#B8C0D4] text-sm mb-2 block">Mesaj</label>
                <Textarea 
                  placeholder="Spune-ne mai multe despre evenimentul tău..."
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-[#B8C0D4]/60 focus:border-[#2EE9FF] resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#2EE9FF] text-[#070A12] hover:bg-[#5EEDFF] font-semibold py-6 text-base rounded-xl"
                style={{ boxShadow: '0 0 30px rgba(46, 233, 255, 0.25)' }}
              >
                Trimite cererea
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#070A12] border-t border-white/15 py-8">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/ledvision_logo.png"
              alt="LED Vision Systems"
              className="h-12 w-auto object-contain"
            />
          </div>
          
          <p className="text-[#B8C0D4] text-sm flex items-center gap-2">
            <img src="/ledvision_logo.png" alt="" className="h-7 w-auto object-contain opacity-80" aria-hidden />
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

// Main App
function App() {
  useEffect(() => {
    // Simple entrance animation
    gsap.fromTo('.hero-content',
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 }
    );

    gsap.fromTo('.hero-image-container',
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.3 }
    );

    // Global snap for pinned sections
    const setupSnap = () => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
            if (!inPinned) return value;

            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out'
        }
      });
    };

    const snapTimeout = setTimeout(setupSnap, 500);

    return () => {
      clearTimeout(snapTimeout);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#070A12] min-h-screen">
      <Navigation />

      {/* Hero Section - Simpler layout with better visibility */}
      <section 
        id="hero"
        className="min-h-screen w-full relative overflow-hidden bg-[#070A12] flex items-center"
        style={{ zIndex: 10 }}
      >
        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{ 
          backgroundImage: 'linear-gradient(rgba(46, 233, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 233, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="w-full px-6 lg:px-12 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content - Left side */}
          <div className="hero-content w-full lg:w-[45%] z-10">
            <span className="font-mono text-xs tracking-[0.12em] uppercase text-[#2EE9FF] mb-4 block">
              RENTAL • STAGING • FIXED INSTALL
            </span>
            <h1 className="font-display font-bold text-display-1 text-white mb-6">
              Ecrane LED
            </h1>
            <p className="text-[#C8D0E0] text-lg leading-relaxed mb-8 max-w-lg">
              Ecrane LED care transformă fiecare eveniment în succes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-[#2EE9FF] text-[#070A12] hover:bg-[#5EEDFF] font-semibold px-8 py-6 text-base rounded-xl"
                style={{ boxShadow: '0 0 30px rgba(46, 233, 255, 0.25)' }}
              >
                Vezi soluțiile
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <button 
                onClick={scrollToContact}
                className="text-[#2EE9FF] hover:text-[#5EEDFF] font-medium px-4 py-2 transition-colors"
              >
                Cere ofertă
              </button>
            </div>
          </div>

          {/* Hero Image - Right side */}
          <div className="hero-image-container w-full lg:w-[50%] z-10">
            <img 
              src="/hero_screen.jpg" 
              alt="Ecrane LED"
              className="w-full h-auto max-h-[70vh] object-cover rounded-2xl"
              style={{ boxShadow: '0 24px 70px rgba(0, 0, 0, 0.5)' }}
            />
          </div>
        </div>
      </section>

      {/* Pinned Sections 2-6 */}
      <PinnedSection
        id="detalii"
        label="PRECISION ENGINEERING"
        headline="Fiecare detaliu contează"
        subheadline="De la module la cabluri, fiecare componentă este gândită pentru performanță și fiabilitate."
        cta="Descoperă tehnologia"
        image="/screen_detail.jpg"
        imagePosition="left"
        zIndex={20}
      />

      <PinnedSection
        id="claritate"
        label="HIGH RESOLUTION"
        headline="Claritate maximă"
        subheadline="Rezoluție înaltă, refresh rapid și contrast profund—pentru conținut care se vede perfect de aproape."
        cta="Vezi specificațiile"
        image="/screen_resolution.jpg"
        imagePosition="right"
        zIndex={30}
      />

      <PinnedSection
        id="atmosfera"
        label="CREATIVE CONTROL"
        headline="Creează atmosfera"
        subheadline="Luminozitate ajustabilă și culori calibrate pentru a transforma orice loc în experiență."
        cta="Explorează posibilitățile"
        image="/screen_mood.jpg"
        imagePosition="left"
        zIndex={40}
      />

      <PinnedSection
        id="spatiu"
        label="MODULAR SYSTEMS"
        headline="Transformă orice spațiu"
        subheadline="Configurații flexibile pentru scenă, sală, terasă sau stradă—montaj rapid, fără compromisuri."
        cta="Configurează setupul"
        image="/screen_modular.jpg"
        imagePosition="right"
        zIndex={50}
      />

      <PinnedSection
        id="luminozitate"
        label="HIGH BRIGHTNESS"
        headline="O imagine mai luminoasă"
        subheadline="Panouri cu luminozitate ridicată, vizibile chiar și în lumină puternică—perfecte pentru exterior."
        cta="Vezi soluțiile outdoor"
        image="/screen_bright.jpg"
        imagePosition="left"
        zIndex={60}
      />

      {/* Flowing Sections */}
      <div style={{ position: 'relative', zIndex: 70 }}>
        <ServicesSection />
        <ProductsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
