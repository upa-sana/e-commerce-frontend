import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProducts } from "../../api/product.api";
import FeatureContainerComponent from "../../shared/components/feature-container.page";
import FeatureImageComponent from "../../shared/components/feature-image.page";
const ProductComponent = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  let [params, setParams] = useState({
    name: "",
    price: "",
    sort: "",
  });

  const getProducts = () => {
    console.log("params", params);
    const data = fetchProducts(categoryName, params)
      .then((res) => {
        setProducts(res.data.product);
      })
      .catch((error) => {
        console.log("product fetch error");
      });
  };

  const goToProductDetail = (productId) => {
    navigate(`/${categoryName}/products/${productId}`);
  };

  const productFilterOptions = [
    { name: "Price: Low to High", value: 1 },
    { name: "Price: Hign to Low", value: -1 },
  ];

  useEffect(() => {
    getProducts();
  }, []);

  const filterProduct = (e) => {
    const { value } = e.target;
    params = {
      ...params,
      sort: value,
    };
    setParams(params);
    getProducts();
  };

  return (
    <>
      <section className="product-container">
        <section className="bg-gray-300 px-4 py-2 min-h-10 flex justify-end">
          <select
            className="py-1 px-2 rounded-md border border-solid border-gray-300 hover:border-green-500"
            name="filterName"
            onChange={filterProduct}
          >
            {productFilterOptions?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </section>
        <FeatureContainerComponent products={products}>
          {products?.map((item, index) => {
            const byteArray = new Uint8Array(item.productImage?.data);
            const base64String = btoa(
              String.fromCharCode.apply(null, byteArray)
            );
            const imageSrc = `data:image/*;base64,${base64String}`;
            return (
              <FeatureImageComponent
                label={item.name}
                image={imageSrc}
                desc={item.description}
                key={item._id}
                navigate={() => goToProductDetail(item._id)}
              />
            );
          })}
        </FeatureContainerComponent>
      </section>
    </>
  );
};

export default ProductComponent;
