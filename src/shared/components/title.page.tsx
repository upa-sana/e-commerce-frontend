const TitleComponent = (props) => {
  return (
    <h1
      role="title"
      aria-label="e-commmerce sign in page"
      className="text-2xl text-gray-800"
    >
      {props.title}
    </h1>
  );
};

export default TitleComponent;
