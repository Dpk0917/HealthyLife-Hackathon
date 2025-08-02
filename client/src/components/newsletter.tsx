import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeNewsletter = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/newsletter/subscribe", { email });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeNewsletter.mutate(email);
    }
  };

  return (
    <section className="py-20 bg-[hsl(210,40%,98%)]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[hsl(222,47%,11%)] mb-4">Stay Updated</h2>
          <p className="text-xl text-[hsl(217,91%,60%)] mb-8">
            Get the latest health tips, wellness advice, and exclusive content delivered to your inbox
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full border border-[hsl(213,27%,84%)] focus:outline-none focus:ring-2 focus:ring-[hsl(158,64%,52%)]"
              required
            />
            <Button
              type="submit"
              disabled={subscribeNewsletter.isPending}
              className="ripple bg-[hsl(158,64%,52%)] text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 transition-colors"
            >
              {subscribeNewsletter.isPending ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-sm text-[hsl(217,91%,60%)] mt-4">
            No spam, unsubscribe at any time. Privacy policy applies.
          </p>
        </div>
      </div>
    </section>
  );
}
