import {  searchGameFn } from "@/Api/Api";
import HeroSection from "@/components/HeroSection";
export default async function Home() {
const {results,count,next,previous} = await searchGameFn('',1,1,3600,[])
console.log(results)
  return <>
  <HeroSection/>
  
  </>
}
