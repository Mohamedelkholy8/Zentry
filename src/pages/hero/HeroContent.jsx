import { useGSAP } from "@gsap/react"
import gsap from "gsap"
function HeroContent() {
    useGSAP(() => {
        gsap.from('h1' , {
            rotateX: 75,
            rotateY: -25,
            x:-100 ,
            duration: 1,
            ease: "power3.out",
            stagger: 0.1
        })
        gsap.from('#contentP' , {
            opacity: 0.2 ,
            y: 20,
            ease: 'power3.out'
        })
    })
    return (
        <div className="text-[#DFDFF2] translate-y-[100px] p-8 pt-0 flex flex-col justify-between h-[90vh] ">
            <div>
                <h1 className="headHero text-9xl font-black transform:perspective(1000px)">REDEFINE</h1>
                <p id="contentP" className="text-sm font-medium">Enter the Human-Agentic OS <br/>The substrate where life, data, and AI form a <br/>perpetual engine, compounding intelligence, <br/>capability, and value </p>
            </div>
            <div className="flex flex-col items-end">
                <h1 className="headHero text-9xl font-black transform:perspective(1000px)">REALITY</h1>
            </div>
        </div>
    )
}

export default HeroContent
