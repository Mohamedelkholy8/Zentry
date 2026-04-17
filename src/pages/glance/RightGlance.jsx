import { useState } from 'react';
import img from './../../assets/glance-2.png'
function RightGlance() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="flex-1 flex flex-col gap-3 ">
            {/* card 1 */}
            <div className={`w-full aspect-[1/1.3] bg-white/20 rounded glanceContainer4
                            bg-[url(${img})] 
                            bg-cover 
                            bg-center 
                            bg-no-repeat overflow-hidden cursor-pointer`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >
                <p className=' text-[8px] p-2'>Current active users</p>
                <h4 
                        className="font-black text-6xl  xl:text-7xl text-center ml-[25%] xl:ml-[30%]" 
                        style={{ 
                            transform: isHovered ? ' perspective(100px) rotateY(0deg) rotateX(0deg) rotateZ(0)' : 'perspective(100px) rotateY(30deg) rotateX(0deg) rotateZ(-3deg)',
                            transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1)',
                            margin: isHovered ? 0 : '',
                            
                        }}
                    >
                        500K+
                    </h4>
            </div>
            {/* card 2 */}
            <div className=" glanceContainer5 w-2/3 aspect-square bg-black border border-white/20 rounded flex flex-col justify-between">
                <h5 className='text-white font-black p-2 xl:text-3xl leading-none'>WORLD-CLASS<br/>BACKERS</h5>
                <ul className='text-[5px] text-right pr-2 pb-2 '>
                    <li>COINBASE VENTURES</li>
                    <li>YZI LABS</li>
                    <li>SPARTAN</li>
                    <li>LONGHASH</li>
                    <li>PANTERA CAPITAL</li>
                    <li>ANIMOCA BRANDS</li>
                    <li>DEFIANCE CAPITAL</li>
                    <li>PLAY VENTURES</li>
                    <li>SKYVISION CAPITAL</li>
                    <li>VESSEL CAPITAL</li>
                    <li>ARCHE FUND</li>
                    <li>SYNERGIS</li>
                </ul>
            </div>
            {/* card 3 */}
            <div className=" glanceContainer6 w-full aspect-[2/1.1] bg-[#DFDFF2] rounded text-black p-2 flex flex-col">
                <p className="font-mono text-[8px] md:text-[10px]">Value distributed</p>
                <div className="flex items-center justify-center flex-1">
                    <h4 className="font-black text-6xl md:text-7xl xl:text-[90px] leading-none tracking-tighter">$20M</h4>
                    <div className="flex flex-col justify-center ml-1">
                        <span className="font-black text-5xl md:text-6xl xl:text-[80px] leading-none -mt-4">+</span>
                        <span className="font-mono text-[5px] md:text-[6px] xl:text-[8px] uppercase leading-tight mt-1">
                            more to<br/>be added
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RightGlance