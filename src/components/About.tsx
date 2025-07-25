import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import gsap from "gsap"
import AnimatedTitle from "./AnimatedTitle"
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: true,
                pin: true,
                pinSpacing: true
            }
        })
        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0
        })
    })
  return (
    <section id='about' className='min-h-screen w-screen'>
     <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
       <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
       </h2>
       <AnimatedTitle title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
       containerClass="mt-5 text-black text-center" />
       
       <div className="about-subtext">
          <p>The Game of Games begins-Your life, now an epic
            MMORPG 
          </p>
          <p>
            Zentry unites every player from countless games and platforms
          </p>
       </div>
     </div>
     <div className="h-dvh w-screen" id="clip">
       <div className="mask-clip-path about-image">
         <img src="assets/img/about.webp" alt="" className="
         absolute left 0 top-0 size-full object-cover"/>
       </div>
     </div>
    </section>
  )
}

export default About
