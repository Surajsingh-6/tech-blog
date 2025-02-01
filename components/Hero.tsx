import React from "react";
import "../app/globals.css";
import Link from "next/link";
function Hero() {
    return (
        <div className="text-5xl w-screen h-screen pt-[20vh] px-16">
            <div>
                <span>Tech Trends</span> - Daily & Weekly Tech Summaries For You
            </div>
            <div className="w-full flex justify-between  h-[50vh] gap-16 items-stretch mt-28 text-color-2 font-mono">
                <Link href="/weeklyblogs" className="w-3/4 hero-img pr-16 pl-8 border-8 border-black rounded-3xl text-[var(--color-2)] m_sc_font">
                    
                    <div>Weekly Summary <span className="font-mono text-xl m-8">read -{">"}</span></div>
                    
                </Link>
                <div className="w-1/4 rounded-3xl flex flex-col items-center p-12 px-20  gap-8 bg-[var(--color-1)] text-[var(--color-2)]">
                    <div className="text-3xl m_sc_font ">Daily Summary</div>
                    <div className="text-xl">
                        Stay Updated in Minutes of Daily Tech News in tech World
                    </div>
                    <Link href='/dailyblogs'  className="bg-[var(--color-2)] w-5/6 h-10 rounded-full mx-auto text-3xl text-[var(--color-1)] text-center">
                        <button>
                            Read
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
