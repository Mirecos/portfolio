function NavbarItem(props) {
    return (
        <a>
            <h2 className="text-white">{props.title}</h2>
        </a>
    );
}
export default NavbarItem;