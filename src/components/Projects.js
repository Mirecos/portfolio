import NoteHouse from "../assets/NoteHouse.png";
import Resume from "../assets/resume.png";
import Project from "./Parts/Project";
import { motion } from "framer-motion";

const NoteHouseObject = {
  image: NoteHouse,
  title: "NoteHouse",
  description:
    "Application mobile de gestion de notes publiées sur le playstore. Le projet implément m'a permis de travailler sur de nombreuses fonctionnalités comme l'OAuth2, le développement mobile avec react native ainsi que l'implémentation de firebase.",
};
const PortfolioObject = {
  image: Resume,
  title: "Portfolio",
  description:
    "Portfolio personel réalisé en ReactJS, tailwindcss et déployé via Vercel. Le but principal de ce projet est de mettre en avant mes compétences via un site web moderne et entièrement responsive, grâce a la méthode du mobile-first.",
};

function Projects() {
  return (
    <motion.div
      className="bg-gray-bg flex flex-col space-y-8 py-4"
      id="Projets"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className="text-center text-4xl font-bold">Projets :</h1>
      <Project
        image={NoteHouseObject.image}
        title={NoteHouseObject.title}
        description={NoteHouseObject.description}
      />
      <Project
        image={PortfolioObject.image}
        title={PortfolioObject.title}
        description={PortfolioObject.description}
      />
    </motion.div>
  );
}
export default Projects;
