const Label = (props) => {
  return (
    <label className="font-extrabold text-sm mb-2" for={props.name}>
      {props.value}
    </label>
  );
};

export default Label;
