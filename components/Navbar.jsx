'use client'
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => (
    <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="py-8 absolute w-full md:w-[80%] top-0 flex justify-around md:justify-between items-center z-10"
    >
        <motion.h3
            className="text-white cursor-pointer pr-[10%] font-semibold font-merriweather text-[20px]"
        >
            ChatFlow
        </motion.h3>
        <ul
            className="md:flex md:gap-[55px] hidden gap-6 flex-1"
        >
            <li><a className="text-[14px] text-slate-300 hover:text-white" href="#">Home</a></li>
            <li><a className="text-[14px] text-slate-300 hover:text-white" href="#">Pricing</a></li>
            <li><a className="text-[14px] text-slate-300 hover:text-white" href="#">Support</a></li>
            <li><a className="text-[14px] text-slate-300 hover:text-white" href="#">Contact Us</a></li>
        </ul>
        <motion.div
            className="flex gap-[15px] items-center"
        >
            <li className="list-none font-semibold text-[14px] font-DMSans px-[20px] text-white hover:opacity-50 transition"><a href="#">Login</a></li>
            <li className="list-none font-semibold text-[14px] font-DMSans px-[20px] bg-slate-300 py-2 rounded-md bg-opacity-75 hover:opacity-50 transition"><a href="#">Register</a></li>
        </motion.div>
    </motion.nav>
);
 
export default Navbar;