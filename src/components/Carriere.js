import UXKey from "../assets/UXKey.png";
import PointSoft from "../assets/PointSoft.png";
import Experience from "./Parts/Experience";
import { motion } from "framer-motion";

const UXKEYObject = {
  image: UXKey,
  title: "Développeur analyste alternant",
  duration: "Septembre 2023 - Août 2024",
  description: [
    "- Analyse et inférence des données comportementales capturées sur des applications webs",
    "- Création de ressources API avancées pour l'exploitation des données (NestJS, Flask)",
    "- Implémentation d'interface basique pour la gestion des données (VueJS)",
    "- Prise en main et utilisation quotidienne de Docker",
  ],
};

const PointSoftObject = {
  image: PointSoft,
  title: "Développeur stagiaire",
  duration: "Avril 2023 - Juin 2023",
  description: [
    "- Création d'une API poussée de management de licences pour la vente de logiciels",
    "- Implémentation d'un module de gestion de réclamations sur un CRM",
  ],
};

function Carriere() {
  return (
    <motion.div
      className="bg-gray-bg flex flex-col space-y-4 py-4"
      id="Carriere"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className="text-center text-4xl font-bold">Carrière :</h1>
      <Experience
        image={UXKEYObject.image}
        title={UXKEYObject.title}
        duration={UXKEYObject.duration}
        description={UXKEYObject.description}
      />
      <Experience
        image={PointSoftObject.image}
        title={PointSoftObject.title}
        duration={PointSoftObject.duration}
        description={PointSoftObject.description}
      />
    </motion.div>
  );
}
export default Carriere;
