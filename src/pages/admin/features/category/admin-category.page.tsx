import { useEffect, useState } from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import { deleteCategory, getCategories } from "../../../../api/category.api";
import ErrorMessage from "../../../../shared/components/error.page";
import DialogModalComponent from "../../../../shared/components/ui-components/DialogModal";
import AddCategoryComponent from "./add-category.page";

const AdminCategoryComponent = () => {
  const [category, setCategoty] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const fetchAllCategory = () => {
    getCategories()
      .then((res) => {
        setCategoty(res.data.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  const updateCategory = (category) => {
    putCategory(category._id, category)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const removeCategory = (categoryId) => {
    deleteCategory(categoryId)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <section>
      <div className="category-page">
        <ErrorMessage className="mb-4" error={errorMessage} />
        <div className="add-category flex items-center justify-between">
          <h4 className="pl-2 font-bold text-lg">Categories</h4>
          <button className="btn-yellow" onClick={(e) => setOpenModal(true)}>
            Add Category
          </button>
        </div>
        <div className="product-list mt-4">
          <table className="border w-full">
            <thead className="border">
              <tr className=" border-b">
                <td className="p-4 font-bold">SNO.</td>
                <td className="p-4 font-bold">Cateogry Name</td>
                <td className="p-4 font-bold">Display Name</td>
                <td className="p-4 font-bold">Image</td>
                <td className="p-4 font-bold text-right">Actions</td>
              </tr>
            </thead>
            <tbody className="border">
              {category?.map((item, index) => {
                const byteArray = new Uint8Array(item.featureImage?.data);
                const base64String = btoa(
                  String.fromCharCode.apply(null, byteArray)
                );

                const imageSrc = `data:image/*;base64,${base64String}`;
                return (
                  <tr className="border-b" key={item._id}>
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{item.categoryName}</td>
                    <td className="p-4">{item.displayName}</td>

                    <td className="p-4">
                      <img
                        className="w-12 h-10 rounded-md"
                        src={imageSrc}
                        alt={item.name}
                      />
                    </td>
                    <td className="p-4 flex gap-4 items-center justify-end">
                      <FiEdit
                        className="cursor-pointer"
                        onClick={(e) => updateCategory(item)}
                      />
                      <FiDelete
                        className="cursor-pointer"
                        onClick={(e) => removeCategory(item._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <DialogModalComponent
        open={openModal}
        close={(e) => setOpenModal(false)}
        title={"Add Category"}
        width={"400px"}
        height={"auto"}
      >
        <AddCategoryComponent close={(e) => setOpenModal(false)} />
      </DialogModalComponent>
    </section>
  );
};

export default AdminCategoryComponent;
