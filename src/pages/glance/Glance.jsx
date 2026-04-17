import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/SplitText";
import LeftGlance from "./LeftGlance";
import RightGlance from "./RightGlance";
gsap.registerPlugin(SplitText ,ScrollTrigger);
function Glance({colors , setColors}) {

    useGSAP(() => {
        let glanceP = SplitText.create("#glanceP", { type: "words"});
        let glanceH = SplitText.create("#glanceH", { type: "words"});
        
        gsap.from(glanceP.words, {
            delay:0.5,
            opacity: 0,
            stagger: 0.2,
            duration: 0.000001,
            scrollTrigger:{
                start:'top bottom',
                end:'top -20%',
                trigger:'#glanceP',
                toggleActions: "play reverse play reverse"
            }
        });

        gsap.from(glanceH.words, {
            delay:0.5,
            opacity: 0,
            stagger: 0.1,
            duration: 0.000001,
            scrollTrigger:{
                start:'top bottom',
                end:'top -20%',
                trigger:'#glanceP',
                toggleActions: "play reverse play reverse"
            }
        });

        gsap.from('#glaceH3', {
            delay:0,
            x:-150,
            y:150,
            duration:2 ,
            ease:'power3.out',
            rotateX: -50,
            rotateY: -50,
             scrollTrigger:{
                start:'top bottom',
                end:'top -170%',
                trigger:'#glanceP',
                toggleActions: "play reverse play reverse",
                // markers:true
            }
        });
        const containers = [
            '.glanceContainer1',
            '.glanceContainer2',
            '.glanceContainer3',
            '.glanceContainer4',
            '.glanceContainer5',
            '.glanceContainer6'
        ];

        containers.forEach(container => {
            gsap.from(container, {
                opacity: 0,
                scale: 0.9,
                duration: 1,
                rotateX: -80,
                ease: 'power3.out',
                scrollTrigger: {
                    start: 'top 100%', 
                    end: 'top -100%',
                    trigger: container,
                    toggleActions: "play reverse play reverse",
                }
            });
        });
    });
    
    return (
        <div className=" w-full p-10 transition-all duration-500 ease-in-out -mt-0 lg:mt-[140px]" style={{color:colors.text}}>
            <div className="w-[95%] ml-auto mr-auto text-left">
                <p id='glanceP' className="font-medium text-[8px] mb-4">Welcome to Zentry</p>
                <div id="glaceH3" style={{ perspective: '1000px' }}>
                    <h3 id='glanceH' className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black pb-16">
                        ZENTRY AT A<br/>GLANCE
                    </h3>
                </div>
            </div>
            <div className=" w-[70%] xl:w-[60%] m-auto flex justify-between gap-4  ">
                <LeftGlance/>
                <RightGlance/>
            </div>
        </div>
    )
}
export default Glance;