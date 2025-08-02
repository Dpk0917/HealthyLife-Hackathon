import { Heart } from "lucide-react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center loader-fade-out">
      <div className="text-center">
        <div className="heartbeat mb-4">
          <Heart className="w-16 h-16 text-[hsl(158,64%,52%)] mx-auto" fill="currentColor" />
        </div>
        <h2 className="text-2xl font-semibold text-[hsl(222,47%,11%)]">HealthyLife</h2>
        <p className="text-[hsl(217,91%,60%)] mt-2">Loading your wellness journey...</p>
      </div>
    </div>
  );
}
