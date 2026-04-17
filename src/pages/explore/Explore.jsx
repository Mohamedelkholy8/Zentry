import ExTitle from "../other/ExTitle";
import img from "../../assets/ex1.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TiltCard from "./TiltCard";

gsap.registerPlugin(useGSAP);

let mini1 = [
    'A data layer turning human data',
    'into user-owned meta-contextual',
    'intelligence and domain specific',
    'knowledge for AI systems'
]
let mini2 = [
    'An agentic AI layer powering a ',
    'playable agent society, where',
    'agents evolves autonomously and ',
    'with humans, driving AI ',
    'advancement at scale and ',
    'unlocking new forms of social ',
    'networks, game arenas, and ',
    'capital formation.',
]

let mini3 = [
    'An agentic terminal for the open',
    'web, where human experience meets',
    'agents evolves autonomously and ',
    'AI. Discover insights, capture',
    'advancement at scale and ',
    'opportunities, and monetize  ',
    'participation, data, and capital',
    'all in one programmable ,',
]
let mini4 = [
    'The game-of-games portal where ',
    'every moment of play turns into ',
    'rewards and high-value gaming',
    'data.'
]
let mini5 = [
    'An experimental blend of NFT',
    'agentic AI and community IP',
    'redefining entertainment',
    'primitives',
]


function Explore() {

    useGSAP(() => {
        function animate(agru) {

            gsap.from(agru, {
                opacity: 0,
                scale: 0.95,
                duration: 1,
                rotateX: -20,
                ease: 'power3.out',
                scrollTrigger: {
                    start: 'top 100%',
                    trigger: agru,
                    toggleActions: "play reverse play reverse"
                }
            })
        }
        animate('#contaienr1')
        animate('#contaienr2')
        animate('#contaienr3')
        animate('#contaienr4')
        animate('#contaienr5')
    })

    return (
        <div className="p-[88px]  leading-tight w-full  ">
            <div className=" bottom-16 text-[9px] font-medium z-[-1] ">
                <h6 className="font-semibold">Explore Zentry's Native Products</h6>
                <p className="opacity-[0.5]">Zentry brings together human <br />cicilization-scale intelligence, all white<br />data, unlocking new dimensions of value <br />creation, monetization, and <br />distribution.</p>
            </div>

            <div >
                {/* container one  */}
                <div
                    style={{ transform: "perspective(400px)" }}
                    className="w-full h-[33vw] max-h-[475px] mt-20 relative"
                >
                    <TiltCard
                        id="contaienr1"
                        className="w-full h-[33vw] max-h-[475px] m-auto overflow-hidden bg-[#D3D3E5] text-black rounded-xl flex justify-between items-center"
                    >
                        <div className="p-6 pointer-events-none">
                            <ExTitle isZ={true} title="DATA" mini={mini1} />
                        </div>
                        <img src={img} alt="" className="w-[60%] pointer-events-none" />
                    </TiltCard>
                </div>
                <div className="w-full h-[66vw] gap-6 pt-8 flex justify-between ">
                    <TiltCard
                        id="contaienr2"
                        className="relative h-full w-1/2  rounded-xl">
                        <div className="p-6 pointer-events-none absolute">
                            <ExTitle isZ={true} title="AI" mini={mini2} />
                        </div>
                    </TiltCard>
                    <TiltCard
                        id="contaienr3"
                        className="relative h-full w-1/2  rounded-xl">
                        <div className="p-6 pointer-events-none absolute">
                            <ExTitle isZ={true} title="TERMINAL" mini={mini3} />
                        </div>
                    </TiltCard>
                </div>
                <div className="w-full gap-6 pt-8 flex justify-between ">
                    <TiltCard
                        id="contaienr4"
                        className="relative h-[33vw] max-h-[475px] w-1/2 text-[#DFDFF2]  rounded-xl">
                        <div className="p-6 pointer-events-none absolute">
                            <ExTitle isZ={true} title="AI" mini={mini4} />
                        </div>
                    </TiltCard>
                    <TiltCard
                        id="contaienr5"
                        className="relative h-[33vw] max-h-[475px] w-1/2  text-[#DFDFF2]  rounded-xl">
                        <div className="p-6 pointer-events-none absolute">
                            <ExTitle isZ={true} title="TERMINAL" mini={mini5} />
                        </div>
                    </TiltCard>
                </div>
            </div>

        </div>
    )
}

export default Explore