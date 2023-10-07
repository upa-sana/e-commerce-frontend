const FormLayoutComponent = (props) => {
  return (
    <>
      <main className="shadow-md  mx-auto w-96 border border-solid border-gray-300 p-4 mt-4 rounded-md">
        {props.children}
      </main>
    </>
  );
};

export default FormLayoutComponent;
