'use client'
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { BlackBtn, ExperienceCard } from "../components";
import { experiences } from "../constants";

const Experience = () => (
    <section
        className="experience-bg flex lg:flex-row flex-col py-[50px] gap-[65px] px-[20px] lg:px-[10%] items-start lg:items-center"
    >
        <div className="flex flex-col lg:w-[555px] h-fit gap-8 max-w-[50%] py-0 lg:py-[130px]">
            <div className="flex flex-col justify-between gap-1">
                <h1 className="w-[380px] lg:w-[456px] text-[#0D082C] text-[38px] font-bold font-merriweather leading-[54px] items-stretch">
                Experience the Power of Our Live Chat
                </h1>
                <p className="lg:w-[456px] w-[350px] text-[16px] text-[#0d082c] opacity-60 font-sans leading-[26px]">
                See for yourself how our live chat can help you connect with your customers and improve their experience on your website. Check out a screenshot of our live chat in action.
                </p>
            </div>
            <BlackBtn 
                title={"Book a Demo"}
            />
            <div
                className="flex flex-col lg:flex-row justify-center gap-[30px]"
            >
                {experiences.map((experience, index) => (
                    <ExperienceCard 
                        title={experience.title}
                        desc={experience.desc}
                        index={index}
                    />
                ))}
            </div>
        </div>

        <div className="lg:flex hidden">
            <img
                src="/experience-img.png" 
                alt="experience-img"
                className="object-contain"
            />
        </div>
    </section>
);
 
export default Experience;