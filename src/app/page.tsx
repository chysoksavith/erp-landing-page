import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MobileAppShowcase from "@/components/MobileAppShowcase";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <MobileAppShowcase />
      <Pricing />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
