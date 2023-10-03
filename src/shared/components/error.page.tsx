const ErrorMessage = (props) => {
  const { error, errorMessage } = props;
  return (
    <>
      {error || errorMessage ? (
        <div className="bg-red-100 text-red-500 p-4 rounded-md">
          {error || errorMessage}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ErrorMessage;
