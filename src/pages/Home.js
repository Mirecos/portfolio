import { motion } from "framer-motion";

function Home() {
    return (
        <div className=" flex flex-col md:flex-row justify-between">
        <div className="flex flex-col space-y-6 ml-20 mr-auto my-20">
          <motion.div
            animate={{ transform: "translateX(800px)" }}
            // No effect!
            transformTemplate={
              ({ x, rotate }) => `rotate(${rotate}deg) translateX(${x}px)`
            }
            transition={{ duration: 1 }}
            children={
            <div className="flex flex-col">
              <h1 className="md:text-9xl text-7xl font-bold relative right-[800px]">RECCHIA</h1>
              <h1 className="md:text-7xl text-5xl font-bold relative right-[800px]">Michel</h1>
              <p className="text-4xl font-normal relative right-[800px]">Développeur professionnel</p>
            </div>
          }
          />
            
          
          
          
          
        </div>
        <div>
          <span>Contact me</span>
        </div>
      </div>
    );
}
export default Home;