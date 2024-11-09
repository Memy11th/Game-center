import { allGenre } from "@/Api/Api";
import HeroSection from "@/components/HeroSection";
export default function Home() {

  allGenre()
  return <>
  <HeroSection/>
  </>
}
