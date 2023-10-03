const FormLayoutComponent = (props) => {
  return (
    <>
      <section className="shadow-md  mx-auto w-96 border border-solid border-gray-300 p-4 mt-4 rounded-md">
        {props.children}
      </section>
    </>
  );
};

export default FormLayoutComponent;
