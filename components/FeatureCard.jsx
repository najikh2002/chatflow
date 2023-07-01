'use client'

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const FeatureCard = ({ imgUrl, title, desc, index }) => (
    <motion.div
    variants={fadeIn('down', 'spring', index * 0.5, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 1 }}
    className="flex items-center lg:items-start flex-col justify-between gap-[15px] h-fit"
    >
        <div className="mb-[15px] w-[50px] h-[50px] flex bg-[#4635F3] items-center justify-center rounded-md">
            <img 
                src={imgUrl} 
                alt="icon"
                className="w-[24px] h-[24px] object-contain"
            />
        </div>
        <h3 className="text-[#0D082C] text-center lg:text-start text-[20px] font-sans font-bold">
            {title}
        </h3>
        <p className="text-center lg:text-start text-[rgb(13, 8, 44)] opacity-60 font-normal font-sans leading-[26px]">
            {desc}
        </p>
    </motion.div>
);
 
export default FeatureCard;