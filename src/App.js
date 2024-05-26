import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-white w-screen h-screen bg-gradient-to-tr from-darker via-lighter via-80% to-darker">
      <Navbar/>
      <div className="mx-20 mt-20 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col space-y-6">
          <h1 className="text-9xl font-bold">RECCHIA</h1>
          <h1 className="text-7xl font-bold">Michel</h1>
          <p className="text-4xl font-normal">Développeur professionnel</p>
        </div>
        <div>
          <span>Contact me</span>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
