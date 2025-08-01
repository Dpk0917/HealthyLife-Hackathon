import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScroll();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 py-4 ${isScrolled ? 'navbar-scroll' : ''}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="w-8 h-8 text-[hsl(158,64%,52%)]" fill="currentColor" />
          <span className="text-xl font-bold text-[hsl(222,47%,11%)]">HealthyLife</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-[hsl(222,47%,11%)] hover:text-[hsl(158,64%,52%)] transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-[hsl(222,47%,11%)] hover:text-[hsl(158,64%,52%)] transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('doctors')}
            className="text-[hsl(222,47%,11%)] hover:text-[hsl(158,64%,52%)] transition-colors"
          >
            Doctors
          </button>
          <button
            onClick={() => scrollToSection('tips')}
            className="text-[hsl(222,47%,11%)] hover:text-[hsl(158,64%,52%)] transition-colors"
          >
            Tips
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-[hsl(222,47%,11%)] hover:text-[hsl(158,64%,52%)] transition-colors"
          >
            Contact
          </button>
          <Button className="ripple bg-[hsl(158,64%,52%)] text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors">
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[hsl(222,47%,11%)]"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block text-[hsl(222,47%,11%)] hover:text-[hsl(158,64%,52%)]"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block text-[hsl(222,47%,11%)] hover:text-[hsl(158,64%,52%)]"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('doctors')}
              className="block text-[hsl(222,47%,11%)] hover:text-[hsl(158,64%,52%)]"
            >
              Doctors
            </button>
            <button
              onClick={() => scrollToSection('tips')}
              className="block text-[hsl(222,47%,11%)] hover:text-[hsl(158,64%,52%)]"
            >
              Tips
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-[hsl(222,47%,11%)] hover:text-[hsl(158,64%,52%)]"
            >
              Contact
            </button>
            <Button className="ripple bg-[hsl(158,64%,52%)] text-white px-6 py-2 rounded-full w-full">
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
