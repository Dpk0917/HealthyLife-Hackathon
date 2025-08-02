import { Apple, Heart, Brain, Dumbbell, Shield, Users } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Nutrition Care",
    description: "Expert nutritional guidance for a healthier lifestyle",
    icon: Apple,
    overlay: "Personalized meal plans and dietary guidance for optimal health",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    color: "bg-[hsl(158,64%,52%)]"
  },
  {
    id: 2,
    title: "Cardio Care",
    description: "Comprehensive heart health and fitness solutions",
    icon: Heart,
    overlay: "Heart health monitoring and cardiovascular fitness programs",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    color: "bg-[hsl(217,91%,60%)]"
  },
  {
    id: 3,
    title: "Mental Health",
    description: "Professional mental wellness and therapy services",
    icon: Brain,
    overlay: "Mindfulness, therapy, and mental wellness support",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    color: "bg-[hsl(188,94%,42%)]"
  },
  {
    id: 4,
    title: "Physical Therapy",
    description: "Expert rehabilitation and physical recovery",
    icon: Dumbbell,
    overlay: "Recovery and rehabilitation through expert physical care",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    color: "bg-purple-500"
  },
  {
    id: 5,
    title: "Preventive Care",
    description: "Proactive health monitoring and prevention",
    icon: Shield,
    overlay: "Regular checkups and health screenings for early detection",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    color: "bg-green-600"
  },
  {
    id: 6,
    title: "Wellness Coaching",
    description: "Personalized coaching for holistic wellness",
    icon: Users,
    overlay: "Personal guidance for achieving your health goals",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    color: "bg-orange-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(222,47%,11%)] mb-4">Our Services</h2>
          <p className="text-xl text-[hsl(217,91%,60%)] max-w-2xl mx-auto">
            Comprehensive health solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="service-card relative rounded-3xl overflow-hidden group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className={`service-overlay absolute inset-0 ${service.color} bg-opacity-90 flex items-center justify-center`}>
                  <div className="text-center text-white p-6">
                    <IconComponent className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p>{service.overlay}</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-[hsl(222,47%,11%)] mb-2">{service.title}</h3>
                  <p className="text-[hsl(217,91%,60%)]">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
