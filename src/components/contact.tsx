import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  
  const { toast } = useToast();

  const sendMessage = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact/send", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(222,47%,11%)] mb-4">Get In Touch</h2>
          <p className="text-xl text-[hsl(217,91%,60%)] max-w-2xl mx-auto">
            Ready to start your health journey? We're here to help every step of the way
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[hsl(158,64%,52%)] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[hsl(222,47%,11%)]">Visit Us</h3>
                  <p className="text-[hsl(217,91%,60%)]">123 Wellness Street, Health City, HC 12345</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[hsl(217,91%,60%)] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[hsl(222,47%,11%)]">Call Us</h3>
                  <p className="text-[hsl(217,91%,60%)]">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[hsl(188,94%,42%)] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[hsl(222,47%,11%)]">Email Us</h3>
                  <p className="text-[hsl(217,91%,60%)]">hello@healthylife.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border border-[hsl(213,27%,84%)] focus:outline-none focus:ring-2 focus:ring-[hsl(158,64%,52%)]"
                  required
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border border-[hsl(213,27%,84%)] focus:outline-none focus:ring-2 focus:ring-[hsl(158,64%,52%)]"
                  required
                />
              </div>
              
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl border border-[hsl(213,27%,84%)] focus:outline-none focus:ring-2 focus:ring-[hsl(158,64%,52%)]"
                required
              />
              
              <Textarea
                name="message"
                placeholder="How can we help you?"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl border border-[hsl(213,27%,84%)] focus:outline-none focus:ring-2 focus:ring-[hsl(158,64%,52%)] resize-none"
                required
              />
              
              <Button
                type="submit"
                disabled={sendMessage.isPending}
                className="ripple w-full bg-[hsl(158,64%,52%)] text-white py-4 rounded-2xl font-semibold hover:bg-emerald-600 transition-colors"
              >
                {sendMessage.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
