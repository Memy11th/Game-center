import { searchGameFn } from "@/Api/Api";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  searchGameFn('',1,2,600);
  return <>
  <HeroSection/>
  </>
}
