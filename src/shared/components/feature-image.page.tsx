const FeatureImageComponent = (props) => {
  return (
    <div
      className="
          product-item 
          shadow-xl 
          p-4 
          rounded-md
          border
          border-solid
        border-gray-300
          cursor-pointer h-25"
      onClick={props.navigate}
    >
      <figure className="">
        <div className=""></div>
        <div className="text-md font-bold mb-4 capitalize">{props.label}</div>
        <img src={props.image} className="" alt="feature image" />
        {props.desc ? (
          <figcaption className="text-xs mt-4">{props.desc}</figcaption>
        ) : (
          <></>
        )}
      </figure>
    </div>
  );
};

export default FeatureImageComponent;
