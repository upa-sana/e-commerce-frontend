import { fetchProductsDetail } from "@api/product.api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailComponent = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [productImage, setProductImage] = useState("");

  const getProductDetail = () => {
    const data = fetchProductsDetail(productId)
      .then((res) => {
        //TODO: data patern optimization
        const products = res.data.data;
        const byteArray = new Uint8Array(products.productImage?.data);
        const base64String = btoa(String.fromCharCode.apply(null, byteArray));
        const imageSrc = `data:image/*;base64,${base64String}`;
        setProductDetail(products);
        setProductImage(imageSrc);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const formatImage = () => {
    setProductImage(imageSrc);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <>
      <section className="mx-auto w-9/12 h-auto p-4 mt-4 shadow-2xl border">
        <div className="product-detail-wrapper flex justify-between gap-4">
          <div className="border rounded-md shadow-md p-4 flex-1 ">
            <img className="" src={productImage} alt={productDetail?.name} />
          </div>
          <div className="flex-1 border rounded-md p-4">
            <h6 className="text-lg font-bold">{productDetail?.name}</h6>
            <div>
              <span className="text-md text-gray-600">Price: </span>
              <span className="text-gray-700 font-semibold text-sm">
                NRP {productDetail?.price}
              </span>
            </div>
            <div className="">
              <span className="text-gray-600">Description:</span>
              <span className="text-gray-500 ">
                {productDetail?.description}
              </span>
            </div>
          </div>
        </div>
        <div className="feature-detail p-4 mt-4 border ">
          <h6 className="font-bold">Features:</h6>
        </div>
      </section>
    </>
  );
};

export default ProductDetailComponent;
