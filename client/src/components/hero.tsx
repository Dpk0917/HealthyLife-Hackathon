import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(210,40%,98%)] via-blue-50 to-emerald-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-5xl md:text-7xl font-bold text-[hsl(222,47%,11%)] mb-6">
            <span className="typewriter">Empowering Your Health Journey</span>
          </h1>
          <p className="text-xl md:text-2xl text-[hsl(217,91%,60%)] mb-8 max-w-3xl mx-auto">
            Your trusted companion for wellness, fitness, and medical awareness. 
            Start your journey to a healthier, happier you today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="ripple bg-[hsl(158,64%,52%)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-600 transition-colors">
              Get Started
            </Button>
            <Button 
              variant="outline"
              className="ripple border-2 border-[hsl(158,64%,52%)] text-[hsl(158,64%,52%)] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[hsl(158,64%,52%)] hover:text-white transition-colors"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
