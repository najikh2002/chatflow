import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ChatCard = ({ src, index }) => (
    <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 1 }}
    >
    <img
        src={src}
        alt="chat-image"
        className="w-full object-contain"
    /> 
    </motion.div>
);
 
export default ChatCard;
