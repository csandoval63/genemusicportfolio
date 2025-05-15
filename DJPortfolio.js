import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Calendar, Mail, Info } from "lucide-react";
import Link from "next/link";

export default function DJPortfolio() {
  return (
    <main className="min-h-screen bg-black text-red-600 p-8 font-sans">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">DJ Nightwave</h1>
        <p className="text-xl text-red-400">Electronic | House | Hip-Hop</p>
        <img src="/lion.png" alt="Lion Logo" className="mx-auto w-24 h-24 mt-6" />
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-gray-900">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-white">
              <Music /> Latest Mixes
            </h2>
            <div className="space-y-4">
              <iframe
                width="100%"
                height="120"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/your-mix1"
              ></iframe>
              <iframe
                width="100%"
                height="120"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/your-mix2"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-white">
              <Calendar /> Upcoming Gigs
            </h2>
            <ul className="text-gray-300">
              <li>June 8 - Electric Nights Festival, LA</li>
              <li>July 15 - Club Mirage, NYC</li>
              <li>August 20 - Sunset Beats, Miami</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12 text-white">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Info /> About Me
        </h2>
        <p className="text-gray-300">
          I'm DJ Nightwave, a genre-blending artist known for high-energy sets and deep vibes. From underground clubs to major festivals, I deliver unforgettable musical experiences that make people move. With a passion for house, hip-hop, and everything in between, I live to bring rhythm to life.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center gap-2 text-white">
          <Mail /> Book Me
        </h2>
        <p className="text-gray-300 mb-4">
          Ready to bring the energy to your event? Get in touch below.
        </p>
        <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-6 py-2 rounded-full">
          Contact Now
        </Button>
        <div className="mt-6">
          <Link href="/social" className="text-red-400 hover:underline">
            Visit My Social Media Page →
          </Link>
        </div>
      </section>
    </main>
  );
}
