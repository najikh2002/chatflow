'use client'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { HeadingSection, DescSection, PriceCard } from "../components";
import { prices } from "../constants";

const Price = () => (
    <section
        className="py-[100px]"
    >
        <div
            className="flex flex-col items-center"
        >
            <HeadingSection 
                title={"Affordable Plans for Any Business"}
            />
            <DescSection 
                title={`Our pricing plans are designed to be affordable for businesses of all sizes. From our "Starter" plan to our "Enterprise" option, we have a plan that will fit your budget and meet your live chat needs.`}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] pt-[50px]">
                {prices.map((price, index) => (
                    <PriceCard
                    key={price.id} 
                    {...price}
                    index={index}
                    />
                ))}
            </div>
        </div>
    </section>
);
 
export default Price;