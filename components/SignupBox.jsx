import { BlackBtn } from ".";

const SignupBox = () => (
    <div className="flex flex-col md:flex-row py-3 md:py-[50px] px-[10px] md:px-[10%] justify-between items-center gap-10 md:gap-0">
        <div className="flex flex-col max-w-[50%]">
            <h1 className="text-[24px] text-[#0D082C] font-merriweather font-bold">
            Sign Up and Start Chatting Today
            </h1>
            <p className="pt-3 text-[15px] text-[#0d0804] font-sans font-normal leading-[26px] opacity-60">
            Don&apos;t wait any longer to start improving the user experience on your website. Sign up for our live chat product and start connecting with your customers in real-time.
            </p>
        </div>
        <BlackBtn 
            title={"Sign Up Now"}
        />
    </div>
);
 
export default SignupBox;