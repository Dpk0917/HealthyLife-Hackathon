import { Droplets, Bed, Activity } from "lucide-react";

const tips = [
  {
    id: 1,
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water daily to maintain optimal body function and energy levels.",
    icon: Droplets,
    color: "bg-[hsl(158,64%,52%)]"
  },
  {
    id: 2,
    title: "Quality Sleep",
    description: "Aim for 7-9 hours of quality sleep each night to support physical and mental recovery.",
    icon: Bed,
    color: "bg-[hsl(217,91%,60%)]"
  },
  {
    id: 3,
    title: "Regular Exercise",
    description: "Engage in at least 150 minutes of moderate exercise weekly for cardiovascular health.",
    icon: Activity,
    color: "bg-[hsl(188,94%,42%)]"
  }
];

export default function HealthTips() {
  return (
    <section id="tips" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(222,47%,11%)] mb-4">Health Tips & Insights</h2>
          <p className="text-xl text-[hsl(217,91%,60%)] max-w-2xl mx-auto">
            Evidence-based advice to help you maintain optimal health
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <div
                key={tip.id}
                className="bg-[hsl(210,40%,98%)] rounded-3xl p-8 hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div className={`w-16 h-16 ${tip.color} rounded-full flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(222,47%,11%)] mb-4">{tip.title}</h3>
                <p className="text-[hsl(217,91%,60%)]">{tip.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
