import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import img1 from './../../assets/transition-1.png'
import img2 from './../../assets/transition-2.png'
import img3 from './../../assets/transition-3.webp'
import { useState, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)


function HoverLogo({ src, colors }) {
    const [transformStyle, setTransformStyle] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const itemRef = useRef();
    const parentRef = useRef();

    const handleMouseMove = (e) => {
        if (!parentRef.current) return;

        // Calculate based on static parent bounds to prevent translation oscillation glitch
        const { left, top, width, height } = parentRef.current.getBoundingClientRect();
        
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Base sensitivity on the fully expanded size instead of original bounds
        const relativeX = (e.clientX - centerX) / 144;
        const relativeY = (e.clientY - centerY) / 120;

        const rotateX = relativeY * 20;
        const rotateY = relativeX * -20;

        // Shift slightly in the direction of the mouse
        const translateX = relativeX * 30; // Max 30px shift
        const translateY = relativeY * 30; // Max 30px shift

        const newTransform = `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px) perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        setTransformStyle(newTransform);
    };

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
        setTransformStyle('');
        setIsHovered(false);
    };

    return (
        <span ref={parentRef} className="logo flex justify-center items-center w-7 h-7 relative z-10 hover:z-50">
            <span
                ref={itemRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    left: '50%',
                    top: '50%',
                    transform: transformStyle || "translate(-50%, -50%) perspective(400px) rotateX(0deg) rotateY(0deg)",
                    backgroundColor: colors ? colors.text : 'black',
                    borderColor: colors ? colors.text : 'black',
                    transition: isHovered 
                        ? "transform 0.1s ease-out, width 1s cubic-bezier(0.23, 1, 0.32, 1), height 1s cubic-bezier(0.23, 1, 0.32, 1), border-radius 1s cubic-bezier(0.23, 1, 0.32, 1), background-color 1s, border-color 1s"
                        : "all 1s cubic-bezier(0.23, 1, 0.32, 1)",
                    cursor: 'grab',
                }}
                className={`logoImg absolute overflow-hidden flex shadow-2xl ${
                    isHovered 
                        ? "w-[144px] h-[120px] rounded-[8px] border-[1px]" 
                        : "w-7 h-7 rounded-[4px] border-[1px]"
                }`}
            >
                <img 
                    src={src} 
                    alt="" 
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />
            </span>
        </span>
    );
}
function Transition({colors , setColors}) {



    
    useGSAP(() => {
        let splitP = SplitText.create("#splitP", { type: "words" });
        // Target only the specific spans containing text! Not the parent container.
        let splitTrans = SplitText.create(".split-text-target", { type: "words" });

        // Independent scroll trigger for the first element
        gsap.from(splitP.words, {
            delay: 0.5,
            opacity: 0,
            stagger: 0.2,
            duration: 0.000001,
            scrollTrigger: {
                start: 'top 90%',
                trigger: '#splitTrans',
                toggleActions: "play reverse play reverse"
            }
        })

        // Linked animations on a timeline using a single ScrollTrigger
        let tl = gsap.timeline({
            scrollTrigger: {
                start: 'top 100%',
                trigger: '#splitTrans',
                toggleActions: "play reverse play reverse"
            }
        });

        tl.from(splitTrans.words, {
            delay: 0.5,
            opacity: 0,
            stagger: 0.08,
            duration: 0.000001,
        })
        tl.from('#splitTrans', {
            delay: 0,
            x: -150,
            y: 150,
            duration: 2,
            ease: 'power3.out',
            rotateX: -50,
            rotateY: -50,
        }, '<')
        tl.from('.logo', {
            scale: 0,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
        } , '-=1')
        tl.from('#transitionP' , {
            y: 50,
            opacity: 0,
            duration: 1,
        } , '<')

gsap.to({}, {
  scrollTrigger: {
    trigger: "#divTrans",
    start: "top 5%",

    onEnter: () => {
      setColors({text: "#DFDFF2" , background: "black"});
    },

    onLeaveBack: () => {
      setColors({text: "black" , background: "#DFDFF2"});
    }
  }
});
        // Logo Background Color relies correctly on React state and CSS transition now

        
    })
    return (
        <div className="h-fit w-[80%] m-auto lg:w-[60%]  mb-16 mt-24 " style={{color: colors.text , transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1)'}}>
            <p id='splitP' className="font-medium text-[8px] m-auto w-fit  ">WHO WE ARE</p>
            <div id="divTrans">
                <h3 id='splitTrans' className="text-center text-4xl sm:text-5xl md:text-6xl  lg:text-7xl xl:text-8xl font-black  pt-4 flex-col justify-between items-center">
                    {/*  line 1     */}
                    <div>
                        <span className="split-text-target">WE'RE BULDING</span>
                    </div>
                    {/*  line 2     */}
                    <div className="flex items-center w-fit  m-auto">
                        <span className="split-text-target">A NEW</span>
                        <span className="w-20 h-full  flex justify-center items-center">
                            <HoverLogo colors={colors} src={img1} />
                        </span>
                        <span className="split-text-target">REALITY</span>
                    </div>
                    {/*  line 3     */}
                    <div>
                        <span className="split-text-target">THAT REWARDS</span>
                    </div>
                    {/*  line 4     */}
                    <div className="flex items-center w-fit  m-auto">
                        <span className="split-text-target">USER</span>
                        <span className="w-20 h-full  flex justify-center items-center">
                            <HoverLogo colors={colors} src={img2} />
                        </span>
                        <span className="split-text-target">AND</span>
                    </div>
                    {/* line 5 */}
                    <div>
                        <span className="split-text-target">EMPOWERS</span>
                    </div>
                    {/* line 6 */}
                    <div>
                        <span className="split-text-target">HUMANITY & AI</span>
                    </div>
                    {/* line 7 */}
                    <div className="flex items-center w-fit  m-auto">
                        <span className="split-text-target">TO</span>
                        <span className="w-20 h-full  flex justify-center items-center">
                            <HoverLogo colors={colors} src={img3} />
                        </span>
                        <span className="split-text-target">THRIVE</span>
                    </div>
                </h3>
                <p id="transitionP" className="text-center text-[8px] font-medium mt-8 relative -z-10">
                    Zentry envisions a future where human <br/>potential and AI converge to unlock <br/>unprecedented value progress, and <br/>properity for all.
                </p>
            </div>
        </div>
    )
}
export default Transition