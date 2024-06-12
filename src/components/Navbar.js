import NavbarItem from "./Parts/NavbarItem";

function Navbar(props) {
    return (
        <div className="flex flex-row space-x-16 justify-center pt-4 w-full ">
            <NavbarItem title="Projets"/>
            <NavbarItem title="Carriere"/>
            <NavbarItem title="Etudes"/>
        </div>
    );
}

export default Navbar;
