import { Role } from "@pages/admin/constant/role.constant";
import { readFromLocalStorage } from "@utils/local-storage.utils";
import { useNavigate } from "react-router-dom";

const SubHeaderComponent = () => {
  const user = readFromLocalStorage("user");
  const navigate = useNavigate();
  const goToAdminPanel = () => {
    navigate("/admin");
  };
  return (
    <>
      <header className="sub-header bg-gray-700 w-full h-10 flex items-center gap-6 text-white font-medium text-sm">
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

        {user.role === Role.ADMIN && (
          <div className="underline cursor-pointer" onClick={goToAdminPanel}>
            Go to Admin
          </div>
        )}
      </header>
    </>
  );
};

export default SubHeaderComponent;
