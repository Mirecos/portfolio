
function Project(props) {
    return (
        <div className="flex flex-row justify-evenly">
            <img src={props.image} alt="Logo" className="w-28 h-28"/>
            <div className="flex flex-col w-[55%]">
                <h1 className="font-bold text-center">{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
export default Project;