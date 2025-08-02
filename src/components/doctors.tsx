import { Linkedin, Twitter } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15+ years of experience in cardiovascular medicine and heart health",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Nutritionist",
    experience: "Specialized in dietary planning and nutritional therapy for optimal health",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Mental Health Specialist",
    experience: "Expert in cognitive therapy and mental wellness practices",
    image: "https://images.unsplash.com/photo-1594824388853-d0365c0b8581?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 bg-[hsl(210,40%,98%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(222,47%,11%)] mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-[hsl(217,91%,60%)] max-w-2xl mx-auto">
            Dedicated professionals committed to your health and wellbeing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-[hsl(222,47%,11%)] mb-2">{doctor.name}</h3>
              <p className="text-[hsl(158,64%,52%)] font-medium mb-4">{doctor.specialty}</p>
              <p className="text-[hsl(217,91%,60%)] text-sm mb-6">{doctor.experience}</p>
              <div className="flex justify-center space-x-4">
                <Linkedin className="w-5 h-5 text-[hsl(217,91%,60%)] hover:text-[hsl(158,64%,52%)] cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-[hsl(217,91%,60%)] hover:text-[hsl(158,64%,52%)] cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
