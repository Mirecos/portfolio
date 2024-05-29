import { motion } from "framer-motion";
import { IoCallOutline } from "react-icons/io5";
import { CiMail, CiLinkedin } from "react-icons/ci";
function Home() {
    return (
      <div className=" flex flex-col md:flex-row justify-between md:ml-20 md:mr-[35%] my-20 ">
        <div className="flex flex-col space-y-6">
          <motion.div 
            animate={{ transform: "translateX(800px)" }}
            // No effect!
            transformTemplate={
              ({ x, rotate }) => `rotate(${rotate}deg) translateX(${x}px)`
            }
            transition={{ duration: 1 }}
            children={
            <div className="">
              <h1 className="md:text-9xl text-7xl font-bold relative right-[800px]">RECCHIA</h1>
              <h1 className="md:text-7xl text-5xl font-bold relative right-[800px]">Michel</h1>
              <p className="text-4xl font-normal relative right-[800px]">Développeur professionnel</p>
            </div>
          }
          />
        </div>
        <div>
          <h1>Contactez moi :</h1>
          <div className="flex flex-row items-center space-x-4">
            <CiMail className="text-5xl" />
            <h3 className="">michelrecchia1@gmail.com</h3>
          </div>

          <div className="flex flex-row items-center space-x-4">
            <IoCallOutline className="text-5xl" />
            <h3 className="">06 71 33 28 93</h3>
          </div>

          <div className="flex flex-row items-center space-x-4">
            <CiLinkedin className="text-5xl" />
            <a href="https://www.linkedin.com/in/michel-recchia-2601a5255/">Michel Recchia</a>
          </div>
        </div>
      </div>
    );
}
export default Home;