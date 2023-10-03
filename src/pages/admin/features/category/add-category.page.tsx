import { useState } from "react";
import { postCategory } from "../../../../api/category.api";
import ErrorMessage from "../../../../shared/components/error.page";

const AddCategoryComponent = () => {
  const [category, setCategory] = useState({
    categoryName: "",
    displayName: "",
  });
  const [files, setFiles] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const updateCategory = (e) => {
    const { name, value } = e.target;
    setCategory((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const addCategory = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("categoryName", category.categoryName);
    formData.append("displayName", category.displayName);
    formData.append("featureImage", files);

    postCategory(formData)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const formatImage = (e) => {
    const file = e.target.files[0];
    setFiles(file);
  };

  return (
    <section className="category-item mb-4">
      <form className="form">
        <ErrorMessage error={errorMessage} />
        <div className="grid grid-cols-2 gap-3">
          <div className="form-group">
            <label className="form-label" for="categoryName">
              Category Name
            </label>
            <input
              id="categoryName"
              name="categoryName"
              className="form-input"
              type="text"
              placeholder="Category Name"
              autoComplete="off"
              onChange={updateCategory}
            />
          </div>
          <div className="form-group">
            <label className="form-label" for="displayName">
              Display Name
            </label>
            <input
              id="displayName"
              name="displayName"
              className="form-input"
              type="text"
              placeholder="Category display name"
              autoComplete="off"
              onChange={updateCategory}
            />
          </div>
          <div className="form-group">
            <label className="design-image-ladel" for="image">
              Upload Image <span className="font-bold">:{files?.name}</span>
            </label>
            <input
              className="mt-2 design-image-section"
              id="image"
              type="file"
              name="featureImage"
              onChange={formatImage}
            />
          </div>
        </div>

        <div className="text-right">
          <button className="btn-yellow w-20" onClick={addCategory}>
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddCategoryComponent;
