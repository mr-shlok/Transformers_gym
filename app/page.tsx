import HeroCanvasAnimation from "@/components/HeroCanvasAnimation";
import PremiumGymIntro from "@/components/PremiumGymIntro";
import PremiumStats from "@/components/PremiumStats";
import HighEndGallery from "@/components/HighEndGallery";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationContact from "@/components/LocationContact";
import ProductShowcase from "@/components/ProductShowcase";
import FeatureSection from "@/components/FeatureSection";
import CallToAction from "@/components/CallToAction";
import PremiumFooter from "@/components/PremiumFooter";
import FloatingSocials from "@/components/FloatingSocials";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen font-['Inter']">
      <FloatingSocials />
      <HeroCanvasAnimation />
      <PremiumGymIntro />
      <PremiumStats />
      <HighEndGallery />
      <ServicesSection />
      <ProductShowcase />
      <WhyChooseUs />
      <FeatureSection />
      <TestimonialsSection />
      <LocationContact />
      <CallToAction />
      <PremiumFooter />
    </main>
  );
}
