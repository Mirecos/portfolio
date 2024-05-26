import NavbarItem from "./Parts/NavbarItem";

function Navbar() {
    return (
        <div className="flex flex-row space-x-8 justify-center pt-4">
            <NavbarItem title="Home"/>
            <NavbarItem title="Experiences"/>
            <NavbarItem title="Études"/>
        </div>
    );
}

export default Navbar;
