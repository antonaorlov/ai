"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Mayer",
    avatar: "A",
    title: "Banker",
    description: "I never thought an AI could be my workout buddy, but Gym Buddy proved me wrong. It tailors workouts to my goals, making every session count!",
  },
  {
    name: "Emily Ronson",
    avatar: "E",
    title: "Proffesor",
    description: "Thanks to GymBuddy, I've cracked my fitness plateau. The customized plans and real-time tips have reinvigorated my routine.",
  },
  {
    name: "David Laid",
    avatar: "D",
    title: "BodyBuilder",
    description: "No more guesswork in the gym! Gym Buddy keeps me on track and motivated. It's like having a personal coach right in my pocket.",
  },
  {
    name: "Jessica",
    avatar: "J",
    title: "CFO",
    description: "Gym Buddy took my workouts to a new level. The progress tracking and insights helped me surpass my own expectations. Highly recommended!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader className="bg-gradient-to-r from-green-400 to-blue-500 ">
              <CardTitle className="flex items-center gap-x-2 ">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-black text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}