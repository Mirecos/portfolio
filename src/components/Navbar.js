import NavbarItem from "./Parts/NavbarItem";

function Navbar(props) {
    return (
        <div className="flex flex-row space-x-8 justify-center pt-4 w-full">
            <NavbarItem title="Home" navigate={()=>{props.navigate("Home")}}/>
            <NavbarItem title="Experiences" navigate={()=>{props.navigate("Experiences")}}/>
            <NavbarItem title="Etudes" navigate={()=>{props.navigate("Etudes")}}/>
        </div>
    );
}

export default Navbar;
