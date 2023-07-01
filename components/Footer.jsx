import { footer } from "../constants";

const Footer = () => (
    <div className="py-[50px] px-[10%]">
        <div className="flex flex-col lg:flex-row justify-between gap-[30px] pb-[25px]">
            {footer.map((foot, index) => (
                <div key={index} className="flex flex-col gap-[20px] flex-1">
                    <h5 className="text-[#0d0804] text-[14px] font-sans font-bold tracking-[1.4px] opacity-60">
                        {foot.title}
                    </h5>
                    <div className="flex flex-col gap-[8px]">
                        {foot.list.map((e, index) => (
                            <div key={index}>
                                <p className="text-[#0d082c] text-[16px] opacity-80 
                                font-sans font-normal leading-[28px] hover:opacity-50 
                                transition cursor-pointer">
                                {e}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

        <footer className="flex justify-center pt-[25px]">
            <p className="text-[#0d082c] text-[12px] opacity-40 font-sans font-bold tracking-[1.2px]">
            COPYRIGHT &copy; 2023 — DESIGN BY NAUVAL & DEV BY HIZZDEV
            </p>
        </footer>
    </div>
);
 
export default Footer;