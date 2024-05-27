function NavbarItem(props) {
    return (
        <button onClick={()=>{props.navigate()}}>
            <h2 className="text-white">{props.title}</h2>
        </button>
    );
}
export default NavbarItem;