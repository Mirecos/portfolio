import nest from '../assets/nestjs.svg';
import python from '../assets/python.png';
import ts from '../assets/TypeScript.webp';
import react from '../assets/react.png';
import { motion } from "framer-motion";

function Welcome() {
    return (
      <div className=" flex flex-col space-y-12 md:flex-row md:justify-between md:ml-[10%] md:mr-[20%] my-40">
          <motion.div 
            className='mx-auto md:mx-0'
            animate={{ transform: "translateX(900px)" }}
            // No effect!
            transformTemplate={
              ({ x, rotate }) => `rotate(${rotate}deg) translateX(${x}px)`
            }
            transition={{ duration: 1 }}
            children={
            <div className="flex flex-col space-y-4 ">
              <h1 className="2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl font-bold relative right-[900px] ">RECCHIA</h1>
              <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl font-bold relative right-[900px]">Michel</h1>
              <p className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-normal relative right-[900px] text-text">Développeur professionnel</p>
            </div>
          }
          />

        <motion.div className="w-80 flex flex-col space-y-12 mx-auto md:mx-0 my" animate={{ rotate: 360 }} transition={{repeat: Infinity, duration: 7, ease: "linear"}}>
          <motion.img 
            src={react} 
            alt="react" 
            className="w-20 h-20 mx-auto"
            animate={{ rotate: -360 }} transition={{repeat: Infinity, duration: 10, ease: "linear"}}
          />
          <div className='flex flex-row w-full justify-between'>
            <motion.img 
              src={nest} 
              alt="nest" 
              className="w-20 h-20"
              animate={{ rotate: -360 }} transition={{repeat: Infinity, duration: 10, ease: "linear"}}
            />
            <motion.img 
              src={python} 
              alt="python" 
              className="w-20 h-20"
              animate={{ rotate: -360 }} transition={{repeat: Infinity, duration: 10, ease: "linear"}}
            />
          </div>
          <motion.img 
            src={ts} 
            alt="ts" 
            className="w-20 h-20 mx-auto"
            animate={{ rotate: -360 }} transition={{repeat: Infinity, duration: 7, ease: "linear"}}
          />
        </motion.div>

      </div>
    );
}
export default Welcome;