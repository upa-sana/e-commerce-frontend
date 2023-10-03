const FeatureContainerComponent = ({ props, children }) => {
  return (
    <section className="product-list mx-auto w-9/12 h-auto p-4 my-4 shadow-2xl">
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {children}
      </div>
    </section>
  );
};

export default FeatureContainerComponent;
