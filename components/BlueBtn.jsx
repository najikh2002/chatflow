import Image from "next/image";

const BlueBtn = ({ title }) => (
    <button className="hover:bg-opacity-50 py-[15px] px-[35px] flex gap-1 bg-white bg-opacity-20 rounded-full transition w-fit">
        <img src="/play.svg" alt="play" className="object-contain" />
        <p className="text-[15px] text-white">
            {title}
        </p>
    </button>
);
 
export default BlueBtn;