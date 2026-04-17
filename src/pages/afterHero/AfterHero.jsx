import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/SplitText";
import AfterTrick from "./AfterTrick";
gsap.registerPlugin(SplitText ,ScrollTrigger);


function AfterHero() {
    useGSAP(() => {

        let splitP = SplitText.create("#splitP", { type: "words"});
        let splitH = SplitText.create("#splitH", { type: "words"});
        gsap.from(splitP.words  , {
            delay:0.5,
            opacity: 0,
            stagger: 0.2,
            duration: 0.000001,
            scrollTrigger:{
                start:'top 90%',
                trigger:'#splitP',
                toggleActions: "play reverse play reverse"
            }
        })
        gsap.from(splitH.words  , {
            delay:0.5,
            opacity: 0,
            stagger: 0.1,
            duration: 0.000001,
            scrollTrigger:{
                start:'top 90%',
                trigger:'#splitP',
                toggleActions: "play reverse play reverse"
            }
        })
        gsap.from('#divH3' , {
            delay:0, 
            x:-150,
            y:150,
            duration:2 ,
            ease:'power3.out',
            rotateX: -50,
            rotateY: -50,
             scrollTrigger:{
                start:'top 90%',
                trigger:'#splitP',
                toggleActions: "play reverse play reverse"
            }
        })
    })
    return (
        <div className="pt-16 ">
            <div>
                <p id='splitP' className="font-medium text-xs m-auto w-fit ">Welcome to Zentry</p>
                <div id="divH3">
                    <h3 id='splitH' className="text-center text-4xl font-black md:text-6xl pt-4">HUMAN LIFE POWERS AI<br/>AND AI EXPANDS HUMANPOTENTIAL.</h3>
                </div>
                <AfterTrick/>
            </div>
        </div>
    )
}

export default AfterHero