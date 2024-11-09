import {  searchGameFn } from "@/Api/Api";
import HeroSection from "@/components/HeroSection";
export default function Home() {
searchGameFn('',1,1,3600,[])
  return <>
  <HeroSection/>
  </>
}
