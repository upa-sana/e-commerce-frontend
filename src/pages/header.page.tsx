import { FiLogOut } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { readFromLocalStorage } from "../utils/local-storage.utils";
const HeaderComponent = () => {
  const userInfo = readFromLocalStorage("user");
  const navigate = useNavigate();
  const searchProduct = () => {};
  const goToSigninPage = () => {
    navigate("/sign-in");
  };
  const logout = () => {
    navigate("/sign-in");
    localStorage.clear();
  };
  return (
    <>
      <header className="bg-gray-800 w-full h-18 text-sm">
        <section className="header flex items-center justify-between gap-10 text-white font-medium p-2">
          <div className="logo">
            <img
              src="src/assets/images/shopping_cart.png"
              alt="shop icon"
              className="rounded-full w-10 h-10"
            />
          </div>
          <div className="search-product flex-1 flex ">
            <input
              type="text"
              name="search-product"
              placeholder="Search product"
              autoComplete="off"
              className=" w-full text-gray-300 h-10 p-4 border-none rounded-l-md hover:border-none focus:shadow-md focus:border-none"
            />
            <button
              type="button"
              onClick={searchProduct}
              className="bg-orange-300 p-3 rounded-r-md text-black "
            >
              <GoSearch />
            </button>
          </div>
          <div className=" flex gap-1 items-center cursor-pointer">
            <img
              src="src/assets/images/shopping-cart-icon.png"
              alt="order item"
              className="w-10 h-10"
            />
            <span>Cart</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer ">
            {userInfo ? (
              <>
                <img
                  src="src/assets/images/profile1.png"
                  alt="profile"
                  className="w-5 h-5 rounded-full"
                />
                <span>Hi, {userInfo.name}</span>
              </>
            ) : (
              <div className="" onClick={goToSigninPage}>
                Singin/Signup
              </div>
            )}
          </div>
          <div className="cursor-pointer p-4" onClick={logout}>
            <FiLogOut />
          </div>
        </section>
      </header>
    </>
  );
};

export default HeaderComponent;
