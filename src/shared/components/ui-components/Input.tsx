const Input = (props) => {
 return(
    <input
    className="border border-solid border-gray-400 rounded-md h-10 w-full mt-1 hover:border-yellow-300 focus:border-yellow-300 active:border-yellow-300 p-4"
    placeholder={props.placeholder}
    name={props.name}
    type={props.type}
    onChange={props.handleChange}
  />;
 )
};
