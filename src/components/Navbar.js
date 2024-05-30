import NavbarItem from "./Parts/NavbarItem";

function Navbar(props) {
    return (
        <div className="flex flex-row space-x-8 justify-center pt-4 w-full">
            <NavbarItem title="Home"/>
            <NavbarItem title="Experiences"/>
            <NavbarItem title="Etudes"/>
        </div>
    );
}

export default Navbar;
