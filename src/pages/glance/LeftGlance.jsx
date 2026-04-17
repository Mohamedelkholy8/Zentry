import { useState } from 'react';
import img from './../../assets/glance-1.png'

function LeftGlance() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex-1 flex flex-col gap-3 items-end  mt-20">
            {/* card 1 */}
            <div className={`w-full aspect-[2/1.1]  rounded glanceContainer1
                bg-[url(${img})] 
                bg-cover 
                bg-center 
                bg-no-repeat p-2 flex flex-col justify-between`}>
                    <p className='text-[8px] '>Special zAI Parameters</p>
                    <h4 className='font-black text-6xl mb-1'>24B+</h4>
            </div>
            {/* card 2 */}
            <div 
                className=" glanceContainer2 w-2/3 aspect-square rounded bg-[#DFDFF2] text-black p-2 flex flex-col justify-between cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="w-full">
                    <h4 
                        className="font-black text-4xl  xl:text-6xl text-center ml-[25%] xl:ml-[30%]" 
                        style={{ 
                            transform: isHovered ? ' perspective(100px) rotateY(0deg) rotateX(0deg) rotateZ(0)' : 'perspective(100px) rotateY(30deg) rotateX(0deg) rotateZ(-3deg)',
                            transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1)',
                            margin: isHovered ? 0 : '',
                            
                        }}
                    >
                        970GB+
                    </h4>
                </div>
                <p className='text-[8px] w-full text-right mt-auto'>Data Process for AI-ready</p>
            </div>
            {/* card 3 */}
            <div className=" glanceContainer3 w-full aspect-[1/1.3] bg-[#5542FF] rounded p-2">
                <p className='text-black text-[8px]'>Treasury</p>
                <h4 className='text-black font-black text-4xl xl:text-8xl '>100M+</h4>
            </div>
        </div>
    )
}
export default LeftGlance