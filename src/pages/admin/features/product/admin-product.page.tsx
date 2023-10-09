import { useEffect, useState } from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchAllProducts,
  putProduct,
} from "../../../../api/product.api";
import { getAllProducts } from "../../../../pages/admin/store/product.slice";
import ConfirmModalComponent from "../../../../shared/components/confirm-modal.page";
import ErrorMessage from "../../../../shared/components/error.page";
import Pagination from "../../../../shared/components/ui-components/Pagination";
import { titleAction } from "../../../../store/title.action";
import { storeTitle } from "../../../../store/title.store";
import { changeTitle } from "../../store/title.slice";
import AddProductComponent from "./add-product.page";

const AdminProductComponent = () => {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [singleProduct, setSingleProduct] = useState();
  const [openupdateProductModal, setOpenProductModal] = useState(false);
  const [totalData, setTotaldata] = useState();
  const [crudMode, setCrudMode] = useState("ADD");
  const [paging, setPaging] = useState({
    page: 1,
    size: 10,
  });

  // product api call using redux and thunk.
  const { storeProducts, error, pending } = useSelector(
    (state) => state.productsFromStore
  );
  const dispatch = useDispatch();

  // dispatching for title
  useEffect(() => {
    storeTitle.dispatch(titleAction("Products"));
  }, []);

  // redux toolkit title implement
  const pageTitle = useSelector((state) => state.productPageTitle.title);
  const dispatcher = useDispatch();
  dispatcher(changeTitle("Products List"));

  // get products
  const getProducts = (params) => {
    fetchAllProducts(params)
      .then((res) => {
        setProducts(res.data.data.data);
        setTotaldata(res.data.data.totalData);
      })
      .catch((error) => {});

    dispatch(getAllProducts());
  };

  // call product
  useEffect(() => {
    getProducts({ page: 0, size: 10 });
  }, []);

  // update product
  const updateProduct = () => {
    putProduct(singleProduct._id, singleProduct)
      .then((res) => {
        // set mode
        setCrudMode("ADD");
        window.location.reload();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  // remove product
  const removeProduct = () => {
    deleteProduct(singleProduct._id)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const updateProductModal = (product) => {
    setOpenProductModal(true);
    setSingleProduct(product);
    setCrudMode("UPDATE");
  };

  const confirmModal = (product) => {
    setOpenDeleteModal(true);
    setSingleProduct(product);
  };

  const onPageChange = (isNext) => {
    if (products.length < paging.size && isNext) {
      return;
    }
    if (paging.page <= 1 && !isNext) {
      return;
    }

    const page = isNext ? paging.page * 1 + 1 : paging.page * 1 - 1;
    setPaging({
      ...paging,
      page,
    });

    getProducts({ page: page - 1, size: 10 });
  };

  const close = () => {
    setOpenProductModal(false);
    setCrudMode("ADD");
  };

  return (
    <section className="overflow-y-auto h-full">
      <div className="product-page">
        <ErrorMessage className="mb-4" error={errorMessage} />
        <div className="add-product flex items-center justify-between">
          <h4 className="pl-2 font-bold text-lg">{pageTitle}</h4>
          <button
            className="btn-yellow"
            onClick={(e) => setOpenProductModal(true)}
          >
            Add Product
          </button>
        </div>
        <div className="product-list mt-4">
          <table className="border w-full">
            <thead className="border">
              <tr className=" border-b">
                <td className="p-4 font-bold">SNO.</td>
                <td className="p-4 font-bold">Name</td>
                <td className="p-4 font-bold">Price</td>
                <td className="p-4 font-bold">Description</td>
                <td className="p-4 font-bold">Category</td>
                <td className="p-4 font-bold">Image</td>
                <td className="p-4 font-bold text-right">Actions</td>
              </tr>
            </thead>
            <tbody className="border">
              {storeProducts?.data?.data.map((item, index) => {
                const byteArray = new Uint8Array(item.productImage?.data);
                const base64String = btoa(
                  String.fromCharCode.apply(null, byteArray)
                );

                const imageSrc = `data:image/*;base64,${base64String}`;
                return (
                  <tr className="border-b">
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{item.name}</td>
                    <td className="p-4">{item.price}</td>
                    <td className="p-4">{item.description}</td>
                    <td className="p-4">
                      {item.category?.categoryName || "-"}
                    </td>
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
                        onClick={(e) => updateProductModal(item)}
                      />
                      <FiDelete
                        className="cursor-pointer"
                        onClick={(e) => confirmModal(item)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <Pagination
            currentData={products?.length}
            onPageChange={onPageChange}
            page={paging.page}
            size={paging.size}
          />
        </div>
      </div>
      <AddProductComponent
        closeModal={close}
        openModal={openupdateProductModal}
        mode={crudMode}
        product={crudMode === "UPDATE" ? singleProduct : {}}
        click={() => setCrudMode("ADD")}
      />

      <ConfirmModalComponent
        closeModal={(e) => setOpenDeleteModal(false)}
        openModal={openDeleteModal}
        title={"Delete Product"}
        message={`Are you sure deleting the product?`}
        click={removeProduct}
      />
    </section>
  );
};

export default AdminProductComponent;

// features to the product
// edit and delete
// image preview
// category not being added
// pagination
