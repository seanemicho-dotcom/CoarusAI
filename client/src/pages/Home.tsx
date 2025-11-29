import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CategoryGrid from "@/components/CategoryGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <CategoryGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
