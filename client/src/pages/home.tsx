import Loader from "@/components/loader";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Doctors from "@/components/doctors";
import HealthTips from "@/components/health-tips";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useLoader } from "@/hooks/use-loader";

export default function Home() {
  const { isLoading } = useLoader();

  return (
    <div className="overflow-x-hidden">
      {isLoading && <Loader />}
      <Navbar />
      <Hero />
      <Services />
      <Doctors />
      <HealthTips />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}
