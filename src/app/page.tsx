import HeroSection from "@/components/HeroSection";
import PlatformSection from "@/components/PlatformSection";

const platformOptions =[
  'PC',
  'Playstation',
  'XBox'
]
export default  function Home() {
  return <>
  <div className="min-h-screen">
  <HeroSection/>
  <PlatformSection option ={platformOptions[0]}/>

  </div>

  </>
}
