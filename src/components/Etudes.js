import { Chrono } from "react-chrono";
import { motion } from "framer-motion";

const items = [
  {
    title: "BUT Info",
    cardTitle: "2023 - 2024",
    cardSubtitle: "Metz, France",
    cardDetailedText:
      "Troisième année post-bac réalisé en alternance au sein de l'entreprise UX-Key. Au cours de cette année j'ai pu travailler sur dles frameworks React / Spring / Symfony.",
  },
  {
    title: "DUT Info",
    cardTitle: "2021 - 2023",
    cardSubtitle: "Metz, France",
    cardDetailedText:
      "Formation continue avec initiation a de nombreux langages / frameworks ( NodeJS, Flutter, C, Java ,HTML, CSS ). Cette année s'est finalisé par un stage au sein de l'entreprise Point Soft, au cours duquel j'ai réalisé différentes missions mettant en pratique les compétences apprises.",
  },
  {
    title: "Bac général",
    cardTitle: "2020 - 2021",
    cardSubtitle: "Schoeneck, France",
    cardDetailedText: "Spécialité Maths et Sciences de l'ingénieur",
  },
];

function Etudes() {
  var mod = "VERTICAL";

  return (
    <motion.div
      className="bg-gray-bg flex flex-col space-y-8 py-4"
      id="Etudes"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className="text-center text-4xl font-bold">Études :</h1>
      <Chrono
        items={items}
        mode={mod}
        disableToolbar={true}
        enableBreakPoint={false}
        useReadMore={false}
      />
    </motion.div>
  );
}
export default Etudes;
