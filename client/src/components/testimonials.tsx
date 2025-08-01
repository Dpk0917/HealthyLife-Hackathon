import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "HealthyLife transformed my approach to wellness. The personalized nutrition plan helped me lose 30 pounds and feel more energetic than ever!",
    name: "Sarah M.",
    role: "Weight Management Program",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 2,
    text: "The cardio care program saved my life. Dr. Johnson's expertise and the team's support helped me recover from my heart condition completely.",
    name: "Robert K.",
    role: "Cardiac Recovery Program",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 3,
    text: "The mental health support I received was incredible. Dr. Rodriguez helped me overcome anxiety and develop healthy coping mechanisms.",
    name: "Emily T.",
    role: "Mental Wellness Program",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(158,64%,52%)] to-[hsl(217,91%,60%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Patients Say</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Real stories from people who transformed their health with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 text-center shadow-xl" data-aos="fade-up">
            <div className="mb-6">
              <Quote className="w-12 h-12 text-[hsl(158,64%,52%)] mx-auto" />
            </div>
            <p className="text-xl text-[hsl(217,91%,60%)] mb-8 italic">
              "{testimonial.text}"
            </p>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-lg font-semibold text-[hsl(222,47%,11%)]">{testimonial.name}</h4>
            <p className="text-[hsl(217,91%,60%)]">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
