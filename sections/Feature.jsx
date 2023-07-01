'use client'
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { HeadingSection, DescSection, FeatureCard } from "../components";
import { features } from "../constants";

const Feature = () => (
    <section
        className="lg:py-[100px] py-[50px] lg:px-[10%] px-[20px] w-screen"
    >
        <motion.div
            variants={staggerContainer}
            className="flex flex-col items-center justify-center gap-3"
        >
            <HeadingSection 
                title={"Powerful Features to Enhance Your Live Chat Experience"}
            />
            <DescSection 
                title={"Our live chat product is packed with features to help you connect with your customers and provide them with the support they need."}
            />
            <div
                className="grid grid-cols-2 lg:grid-cols-3 gap-[30px] mt-5"
            >
                {features.map((feature, index) => (
                    <FeatureCard 
                        imgUrl={feature.imgUrl}
                        title={feature.title}
                        desc={feature.desc}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    </section>
);
 
export default Feature;