'use client'

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ExperienceCard = ({ title, desc, index }) => (
    <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 1 }}
    className="lg:w-[262.5px] w-[380px]"
    >
        <h4 className="text-[#0D082C] text-[16px] font-sans font-semibold leading-[30px]">
            {title}
        </h4>
        <p className="text-[#0d082c] text-[16px] font-sans font-normal leading-[26px] opacity-60">
            {desc}
        </p>
    </motion.div>
);
 
export default ExperienceCard;