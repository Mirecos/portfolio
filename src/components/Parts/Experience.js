function Experience(props) {
    var description = props.description.map(element => {
        return <li>{element}</li>
    })
    var flexDirection = "flex-row";

    if(props.inversed){
        flexDirection = "flex-row-reverse"
    }

  return (
    <div className="p-8 mx-auto">
      <div className={`flex ${flexDirection}`}>
        <img src={props.image} alt="Logo" className="h-24 align-baseline " />
        <div className="flex flex-col justify-around w-[80%] text-center ">
          <h1 className="font-bold text-center">{props.title}</h1>
          <h4 className="font-light">{props.duration}</h4>
        </div>
      </div>
      <ul className="">
        {description}
      </ul>
    </div>
  );
}
export default Experience;
