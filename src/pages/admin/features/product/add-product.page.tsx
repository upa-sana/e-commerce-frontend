import { postProduct, putProduct } from "@api/product.api";
import ErrorMessage from "@shared/components/error.page";
import DialogModalComponent from "@shared/components/ui-components/DialogModal";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const AddProductComponent = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });
  // const [crudMode, setCrudMode] = useState("ADD");
  const [files, setFiles] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [title, setTitle] = useState();
  const [imagePreview, setImagePreview] = useState();

  useEffect(() => {
    setProduct({
      name: props.product ? props.product.name : "",
      price: props.product ? props.product.price : "",
      description: props.product ? props.product.description : "",
      category: props.product ? props.product.category : "",
    });
  }, [props.product]);

  useEffect(() => {
    const title = props.mode === "UPDATE" ? "Update Product" : "Add Product";
    setTitle(title);
  }, [props.mode]);

  const onChangeProduct = (e) => {
    const { name, value } = e.target;

    setProduct((values) => ({
      ...values,
      [name]: value,
    }));
  };

  /*
  const addProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("productImage", files);

    postProduct(formData)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setCrudMode("ADD");
      });
  };
  */

  const formatImage = (e) => {
    const file = e.target.files[0];
    setFiles(file);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImagePreview(fileReader.readAsDataURL(file));
    };
  };

  const mutationUpdateProduct = useMutation({
    mutationFn: putProduct,
    mutationKey: "product updating",
    onError: (error, variables, context) => {
      debugger;
      console.log(error, variables, context);
    },
    onSuccess: (data, variables, context) => {
      debugger;
      console.log(data);
    },
    onSettled: (data, error, variables, context) => {
      debugger;
    },
    onMutate: (data, error, variables, context) => {
      debugger;
      console.log(data);
    },
  });
  const updateProduct = () => {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("productImage", files);
    mutationUpdateProduct.mutate(props.product._id, formData);

    /*
    putProduct(props.product._id, formData)
      .then((res) => {
        debugger;
        // window.location.reload();
      })
      .catch((error) => {
        setErrorMessage(error.error);
      })
      .finally(() => {
        setFiles();

        // props.click();
      });
      */
  };

  const mutationAddProduct = useMutation({
    mutationFn: postProduct,
    mutationKey: "product adding",
    onMutate: (data, variables, context) => {},
  });

  const addProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("productImage", files);
    mutationAddProduct.mutate(formData);
  };

  return (
    <DialogModalComponent
      open={props.openModal}
      close={props.closeModal}
      title={title}
      width={"400px"}
      height={"auto"}
    >
      <section className="add-product-item">
        <form className="form">
          <ErrorMessage error={errorMessage} />
          <div className="grid grid-cols-2 gap-3">
            <div className="form-group">
              <label className="form-label" for="productName">
                Product Name
              </label>
              <input
                id="productName"
                name="name"
                className="form-input"
                type="text"
                placeholder="Product Name"
                autoComplete="off"
                onChange={onChangeProduct}
                value={product.name}
              />
            </div>
            <div className="form-group">
              <label className="form-label" for="productPrice">
                Product Price
              </label>
              <input
                id="productPrice"
                name="price"
                className="form-input"
                type="number"
                placeholder="Product Price"
                autoComplete="off"
                onChange={onChangeProduct}
                value={product.price}
              />
            </div>
            <div className="form-group">
              <label className="form-label" for="category">
                Category ID
              </label>
              <input
                id="category"
                name="category"
                className="form-input"
                type="text"
                placeholder="Category"
                autoComplete="off"
                onChange={onChangeProduct}
                value={product.category}
              />
            </div>
          </div>
          <div className="form-group mt-4 flex gap-4">
            <div className="">
              <label className="design-image-ladel" for="image">
                Upload Image <span className="font-bold">:{files?.name}</span>
              </label>
              <input
                className="mt-2 design-image-section"
                id="image"
                type="file"
                name="productImage"
                onChange={formatImage}
              />
            </div>
            <div className="">
              {setImagePreview ? <img src={setImagePreview} /> : <></>}
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" for="description">
              Desciption
            </label>
            <textarea
              id="description"
              name="description"
              className="form-input"
              type="number"
              placeholder="Product Price"
              autoComplete="off"
              cols="4"
              onChange={onChangeProduct}
              value={product.description}
            ></textarea>
          </div>
          <div className="flex gap-4 items-center justify-end">
            <button className="btn-default w-20" onClick={props.closeModal}>
              Cancel
            </button>
            {props.mode === "ADD" ? (
              <button className="btn-yellow w-20" onClick={addProduct}>
                Add
              </button>
            ) : (
              <button className="btn-yellow w-20" onClick={updateProduct}>
                Update
              </button>
            )}
          </div>
        </form>
      </section>
    </DialogModalComponent>
  );
};

export default AddProductComponent;
