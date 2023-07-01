'use client'
import { motion } from "framer-motion";
import { BlackBtn, BlueBtn, Navbar, ChatCard } from "../components";
import { chatHero } from "../constants";

const Hero = () => (
    <section
        className="flex flex-col gap-[25px] md:gap-0 py-[30%] md:py-[15%] lg:py-0 md:flex-row hero-bg items-center justify-between px-[5px] lg:px-[10%] min-h-screen w-full"
    >
    <Navbar />
    <div className="lg:w-[630px] py-0 md:py-[15%]">
        <motion.h1
            className="text-white font-serif font-medium text-[56px] leading-[70px] px-3 lg:px-0"
        >
        Improve your customer experience with real-time assistance
        </motion.h1>
        <p className="text-slate-100 font-sans text-[18px] font-normal leading-[32px] text-justify lg:text-start px-3 lg:px-0 mt-2 lg:mt-0 opacity-60">
        Our live chat software helps you connect with your customers instantly, boosting sales and improving customer satisfaction. Try it out today and see the difference it can make for your business.
        </p>
        <div className="flex py-5 gap-[15px] justify-center lg:justify-start mt-10 lg:mt-0">
            <BlackBtn title={"Get Started"} />
            <BlueBtn title={"See In Action"} />
        </div>
    </div>
    <div className="md:flex flex-col max-w-[50%] hidden p-[30px] gap-[35px]">
        {chatHero.map((chat, index) => (
            <ChatCard 
                src={chat.imgUrl}
                index={index}
            />
        ))}
    </div>
    </section>
);
 
export default Hero;