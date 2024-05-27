import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Etudes from "./pages/Etudes";




function App() {
  var [content, setContent] = useState(Home()); 
  function navigateTo(to_page){
    switch(to_page){
      case "Home":
        setContent(Home());
        break;
      case "Experiences":
        setContent(Experiences());
        break;
      case "Etudes":
        setContent(Etudes());
        break;
      default:break;
    }
  }

  return (
    <div className="text-white h-screen w-screen bg-gradient-to-tr from-darker via-lighter via-80% to-darker">
      <Navbar navigate={navigateTo} />
      {content}
      
      
    </div>
  );
}

export default App;
