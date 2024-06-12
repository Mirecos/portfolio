import { motion } from "framer-motion";
import reactlogo from "../assets/reactlogo.png";

function Header() {
    return (
        <motion.div 
        className="relative right-[800px]"
        animate={{ transform: "translateX(800px)" }}
        transition={{ duration: 1, ease: "easeOut", type: "spring"}}

        >
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-col">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">RECCHIA</h1>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl">Michel</h2>
                    <h4 className="text-xl md:text-2xl lg:text-3xl text-text">Développeur professionel</h4>
                </div>
                <motion.img 
                    src={reactlogo} 
                    className="w-23 h-20" 
                    animate={{ rotate: 360 }} 
                    transition={{duration: 7, repeat: Infinity, ease: "linear"}}
                />
            </div>
        </motion.div>

    );
}
export default Header;