import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import PoweredByLabel from "./components/PoweredByLabel";
import ContactCard from "./components/ContactCard";
import Experiences from "./components/Experiences";

function App() {

  return (
    <div className="text-white h-screen w-screen bg-gradient-to-tr from-darker via-lighter via-80% to-darker flex flex-col">
      <Navbar />
      <Welcome/>
      <Experiences/>
      <ContactCard/>
      <PoweredByLabel/>
    </div>
  );
}

export default App;
