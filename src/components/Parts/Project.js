import { motion, useInView } from "framer-motion";

function Project(props) {


    return (
        <div className="flex flex-row justify-evenly">
            <motion.img src={props.image} alt="Logo" className="w-28 h-28"
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{
                    rotate: 360,
                    scale: 1,
                }} 
                transition={{ duration: 0.5 }}
                />
                
            <div className="flex flex-col w-[55%]">
                <h1 className="font-bold text-center">{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
export default Project;