function NavbarItem(props) {
    const handleClick = () => {
        const element = document.getElementById(props.title);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    

    return (
        <button onClick={handleClick} className="hover:scale-125 hover:text-text">
            <h2 className="">{props.title}</h2>
        </button>
    );
}
export default NavbarItem;