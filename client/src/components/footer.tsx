import { Heart, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[hsl(222,47%,11%)] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="w-8 h-8 text-[hsl(158,64%,52%)]" fill="currentColor" />
              <span className="text-xl font-bold">HealthyLife</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted companion for wellness, fitness, and medical awareness.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-[hsl(158,64%,52%)] hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-[hsl(158,64%,52%)] hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-[hsl(158,64%,52%)] hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-[hsl(158,64%,52%)] hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('doctors')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Doctors
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tips')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Health Tips
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Nutrition Care</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Cardio Care</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Mental Health</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Physical Therapy</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Preventive Care</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <p className="text-gray-400 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                123 Wellness Street, Health City
              </p>
              <p className="text-gray-400 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </p>
              <p className="text-gray-400 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                hello@healthylife.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 HealthyLife. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
