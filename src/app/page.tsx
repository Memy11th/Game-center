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
  {platformOptions.map((option , index)=>  <PlatformSection key={index} option ={option}/>
)}

  </div>

  </>
}
