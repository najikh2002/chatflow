'use client'

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const PriceCard = ({ title, price, imgUrl, feature, index }) => (

    <motion.div
        variants={fadeIn('down', 'spring', index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 1 }}
        className="w-[360px] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.10)]"
        >
            <div className={`bg-price-card-${index} flex items-center py-[15px] justify-center rounded-t-xl`}>
                <h3 className="text-white text-[14px] font-DMSans font-normal tracking-[1.4px]">
                    {title}
                </h3>
            </div>
            <div className="flex flex-col p-[30px] rounded-b-lg bg-white">
                <div className="flex items-center justify-center">
                    <h2 className="text-[#000] text-[32px] font-sans font-[500] pt-1 pb-2">
                        {price}
                    </h2>
                </div>
                <ul className="flex flex-col py-[20px] gap-[15px]">
                    {feature.map((e, index) => (
                        <div key={index}>
                            <li className="flex">
                            <img src={imgUrl} />
                            <p className="text-[16px] font-sans font-normal opacity-60">
                            &nbsp;&nbsp;{e}
                            </p>
                        </li>
                        </div>
                    ))}
                </ul>
                <button className={`bg-price-card-${index} w-full p-[10px] rounded-lg hover:opacity-70 transition`}>
                    <p className="text-white text-[14px] font-sans leading-[22px]">
                        Choose
                    </p>
                </button>
            </div>
        </motion.div>
    );

export default PriceCard;
