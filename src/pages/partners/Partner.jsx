import React from 'react';
import img1 from './../../assets/logos/logo-1.png'
import img2 from './../../assets/logos/logo-2.png'
import img3 from './../../assets/logos/logo-3.png'
import img4 from './../../assets/logos/logo-4.png'
import img5 from './../../assets/logos/logo-5.png'
import img6 from './../../assets/logos/logo-6.png'
import img7 from './../../assets/logos/logo-7.png'
import img8 from './../../assets/logos/logo-8.png'
import img9 from './../../assets/logos/logo-9.png'

import { useState } from 'react';

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText ,ScrollTrigger);

function Partner() {
    let [appearLogo, setAppearLogo] = useState(0);
    const partnersInfo = [
        {
            partnerName: "YZILABS",
            id: 'partnerContainer1',
            img: img1,
            desc: (
                <>
                    <span className='text-white'>Blockchain-focused incubator</span> supporting startups in Web3 and decentralized technologies.
                </>
            )
        },
        {
            partnerName: "COINBASE VENTURES",
            id: 'partnerContainer2',
            img: img2,
            desc: (
                <>
                    <span className='text-white'>Venture arm</span> of Coinbase investing in early-stage crypto and blockchain projects.
                </>
            )
        },
        {
            partnerName: "PANTERA CAPITAL",
            id: 'partnerContainer3',
            img: img3,
            desc: (
                <>
                    <span className='text-white'>Investment firm</span> specializing in blockchain technology, digital assets, and cryptocurrencies.
                </>
            )
        },
        {
            partnerName: "DEFIANCE CAPITAL",
            id: 'partnerContainer4',
            img: img4,
            desc: (
                <>
                    <span className='text-white'>Crypto investment</span> firm focusing on decentralized finance, Web3, and blockchain innovation.
                </>
            )
        },
        {
            partnerName: "ANIMOCA BRANDS",
            id: 'partnerContainer5',
            img: img5,
            desc: (
                <>
                    <span className='text-white'>Company developing</span> blockchain games, NFTs, and digital property rights platforms.
                </>
            )
        },
        {
            partnerName: "SKYVISION CAPITAL",
            id: 'partnerContainer6',
            img: img6,
            desc: (
                <>
                    <span className='text-white'>Venture capital</span> firm investing in innovative blockchain and emerging technology startups.
                </>
            )
        },
        {
            partnerName: "PLAY VENTURE",
            id: 'partnerContainer7',
            img: img7,
            desc: (
                <>
                    <span className='text-white'>Investment firm</span> focused on gaming, interactive entertainment, and technology startups.
                </>
            )
        },
        {
            partnerName: "VESSEL CAPITAL",
            id: 'partnerContainer8',
            img: img8,
            desc: (
                <>
                    <span className='text-white'>Early-stage investment</span> firm supporting blockchain, fintech, and Web3 ecosystem growth.
                </>
            )
        },
        {
            partnerName: "ARCHE FUND",
            id: 'partnerContainer9',
            img: img9,
            desc: (
                <>
                    <span className='text-white'>Venture fund</span> investing in blockchain projects, digital assets, and decentralized applications.
                </>
            )
        }
    ];

    useGSAP(() => {
        // Triggers for updating the active partner text/logo
        partnersInfo.forEach((partner, index) => {
            ScrollTrigger.create({
                trigger: `#${partner.id}`,
                start: 'top 20%',
                onEnter: () => setAppearLogo(index),
                onLeaveBack: () => setAppearLogo(index),
            });
        });

        // Pinning the paragraph directly
        ScrollTrigger.create({
            trigger: '#partnerList',
            start: 'top 20%',
            end: 'bottom 20%',
            pin: '#partnerP',
            pinSpacing: false,
            // markers: true, // Markers now align exactly with the top of #partnerList
        });

        // Pinning the logo directly
        ScrollTrigger.create({
            trigger: '#partnerList',
            start: 'top 20%',
            end: 'bottom 20%',
            pin: '#partnerLogo',
            pinSpacing: false,
        });

    }, []);

    return (
        <div className="flex flex-col w-full bg-black text-white px-[3%] md:px-[4%] lg:px-[5%] py-[50px] lg:py-[100px] min-h-screen box-border font-sans justify-center">
            
            {/* Top row: OUR PARTNERS */}
            <div className="flex flex-row justify-between items-end w-full">
                <div className="w-[30%] md:w-[25%] shrink-0"></div>
                
                <div className="w-[60%] md:w-[65%] flex flex-row items-end pl-[2%] md:pl-0 gap-[6px] sm:gap-[10px] md:gap-[15px] lg:gap-[25px]">
                    <span className="opacity-0 select-none shrink-0 text-[0.3rem] sm:text-[0.4rem] md:text-[8px] lg:text-[0.6rem] font-bold tracking-widest">
                        BACKERS
                    </span>
                    <div className="mb-0">
                        <h2 className="text-[1rem] sm:text-xl md:text-3xl lg:text-[3.5rem] uppercase font-black m-0 pt-0 translate-y-[5px] leading-[1] tracking-[-0.02em]">
                            OUR PARTNERS
                        </h2>
                    </div>
                </div>
                
                <div className="w-[10%] shrink-0"></div>
            </div>

            {/* Bottom row: Content */}
            <div className="flex flex-row justify-between items-start w-full mt-2 lg:mt-4">
                
                {/* Left Paragraph */}
                <div className="w-[30%] md:w-[25%] text-[#dfdfdf] text-[0.3rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] leading-relaxed">
                    <p id='partnerP' className="m-0 text-[#676666] pt-[2px] md:pt-[4px] lg:pt-[10px]">
                        
                             {partnersInfo[appearLogo].desc}
                    </p>
                </div>
                
                {/* Center List - responsive gaps for consistent tightness */}
                <div id='partnerList' className=" w-[60%] md:w-[65%] flex flex-col pl-[2%] md:pl-0 gap-[2px] sm:gap-[4px] md:gap-[8px] lg:gap-[12px]">
                    {partnersInfo.map((partner, index) => (
                        <div key={index} id={partner.id} className="flex flex-row items-start gap-[6px] sm:gap-[10px] md:gap-[15px] lg:gap-[25px]">
                            <span 
                                className={`shrink-0 text-[0.3rem] sm:text-[0.4rem] md:text-[8px] lg:text-[0.6rem] font-bold tracking-widest mt-[2px] md:mt-[4px] lg:mt-[10px] translate-y-[5px]  ${appearLogo === index ? 'text-[#EDFF66]' : 'text-[#777]'}`}
                            >
                                BACKERS
                            </span>
                            <h3 
                                className={`text-[1rem] sm:text-xl md:text-3xl lg:text-[3.5rem] uppercase font-black m-0 leading-[1] cursor-pointer  tracking-[-0.02em] ${appearLogo === index ? 'text-[#EDFF66]' : 'text-white'}`}
                            >
                                {partner.partnerName}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Right Logo */}
                <div className="w-[10%] flex justify-end">
                    <img 
                      src={partnersInfo[appearLogo]?.img || partnersInfo[0].img} 
                      alt="Partner logo" 
                      id='partnerLogo'
                      className="w-[40px] sm:w-[60px] md:w-[80px] lg:w-[160px] xl:w-[200px] h-auto object-contain mt-[2px] md:mt-[4px] lg:mt-[5px]  " 
                    />
                </div>
            </div>
        </div>
    );
}

export default Partner;