import { getCategories } from "@api/category.api";
import { FeatureContainerComponent } from "@shared/components/feature-container.page";
import { FeatureImageComponent } from "@shared/components/feature-image.page";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoriesComponent = () => {
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const fetchCategories = () => {
    const data = getCategories()
      .then((res) => {
        //TODO: need to optimize the data sending pattern in the backend.
        setCategories(res.data.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.error);
      });
  };

  /*
  const { data: categories, isLoading } = useQuery({
    queryFn: () => fetchCategories(),
    queryKey: ["categories"],
  });

  if (isLoading) {
    return <div>loading...</div>;
  }
  */

  useEffect(() => {
    fetchCategories();
  }, []);

  const goToProducts = (categoryName) => {
    navigate(`/${categoryName}/products`);
  };

  return (
    <>
      <FeatureContainerComponent category={categories}>
        {categories?.map((item, index) => {
          const byteArray = new Uint8Array(item.featureImage?.data);
          const base64String = btoa(String.fromCharCode.apply(null, byteArray));
          const imageSrc = `data:image/*;base64,${base64String}`;
          return (
            <FeatureImageComponent
              label={item.displayName}
              name={item.categoryName}
              key={item._id}
              image={imageSrc}
              navigate={(e) => goToProducts(item.categoryName)}
            />
          );
        })}
      </FeatureContainerComponent>
    </>
  );
};

export default CategoriesComponent;
