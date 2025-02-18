"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best Gym AI tool:</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          <TypewriterComponent
            options={{
              strings: [
                "Empower Your Fitness Journey.",
                "Supercharge Your Gym Sessions with AI.",
                "Meet Your Gym AI Partner.",
                "Pathway to Fitness Excellence."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Have 10x Better workouts with Us.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="anton" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Empower your Body For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};