import { useNavigate } from "react-router-dom";

const SideBarComponent = () => {
  const navigate = useNavigate();
  const tabList = [
    { label: "Product", value: "product", url: "/admin/products" },
    { label: "Category", value: "category", url: "/admin/category" },
  ];

  const navigateTo = (navigatingTab) => {
    const { url } = navigatingTab;  
    navigate(url);
  };

  return (
    <div
      className="w-60 
     bg-gray-800 h-full text-center p-4"
    >
      {tabList.map((item, index) => {
        return (
          <div
            key={index}
            className=" 
            py-4
            cursor-pointer
           text-white
            font-semibold 
            border border-solid
            border-gray-800
            hover:border-white
            hover:rounded-md"
            onClick={(e) => navigateTo(item)}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default SideBarComponent;
