function NavbarItem(props) {
    const handleClick = () => {
        const element = document.getElementById(props.title);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    

    return (
        <button onClick={handleClick} className="active:scale-125 active:text-text">
            <h2 className="">{props.title}</h2>
        </button>
    );
}
export default NavbarItem;