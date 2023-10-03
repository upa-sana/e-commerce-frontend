import { useNavigate } from "react-router-dom";

const SubHeaderComponent = () => {
  const navigate = useNavigate();
  const goToAdminPanel = () => {
    navigate("/admin");
  };
  return (
    <>
      <section className="sub-header bg-gray-700 w-full h-10 flex items-center gap-6 text-white font-medium text-sm">
        {/* <div className=""> */}
        {/* <div className="sub-header-item border border-solid border-gray-700 my-4 px-3 hover:border-white hover:my-0 hover:pt-3 hover:pt:0.5rem hover:py-2">
          Category 1
        </div>
        <div className="sub-header-item border border-solid border-gray-700 my-4 px-3 hover:border-white hover:my-0 hover:pt-3 hover:pt:0.5rem hover:py-2">
          Category 2
        </div>
        <div className="sub-header-item border border-solid border-gray-700 my-4 px-3 hover:border-white hover:my-0 hover:pt-3 hover:pt:0.5rem hover:py-2">
          Category 3
        </div> */}
        {/* </div> */}
        <div className="underline cursor-pointer" onClick={goToAdminPanel}>
          Go to Admin
        </div>
      </section>
    </>
  );
};

export default SubHeaderComponent;
