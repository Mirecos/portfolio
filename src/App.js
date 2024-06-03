import Carriere from "./components/Carriere";
import Etudes from "./components/Etudes";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Divider from "./components/Parts/Divider";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="text-white h-full w-full bg-gradient-to-tr from-darker via-lighter via-80% to-darker flex flex-col space-y-8">
      <Navbar />
      <Header />
      <div className="text-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,64L48,64C96,64,192,64,288,80C384,96,480,128,576,149.3C672,171,768,181,864,170.7C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="bg-gray-bg sm:px-[25%]">
          <Projects />
          <Divider />
          <Carriere />
          <Divider />
          <Etudes />
        </div>
      </div>
    </div>
  );
}

export default App;
