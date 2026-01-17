import FeaturedProducts from "@/components/landingpage/FeaturedProducts";
import HeroSection from "@/components/landingpage/HeroSection";
import RecentlyLauncedProduct from "@/components/landingpage/RecentlyLauncedProduct";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <RecentlyLauncedProduct/>
    </div>
  );
}
