import { motion } from "framer-motion";

function Header() {
    return (
        <motion.div 
        className="relative right-[800px] ml-[20%]"
        animate={{ transform: "translateX(800px)" }}
        transition={{ duration: 1, ease: "easeOut"}}
        children={
            <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">RECCHIA</h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl">Michel</h2>
                <h4 className="text-xl md:text-2xl lg:text-3xl text-text">Développeur professionel</h4>
            </div>
        }
        />

    );
}
export default Header;