import { Route, Routes } from "react-router-dom";
import "./App.css";

import CategoriesComponent from "@features/category/categories.page";
import ProductComponent from "@features/product/product";
import ProductDetailComponent from "@features/product/product-detail.page";
import AdminDashboardComponent from "@pages/admin/admin-dashboard.page";
import AdminLayoutComponent from "@pages/admin/admin-layout.page";
import AdminCategoryComponent from "@pages/admin/features/category/admin-category.page";
import AdminProductComponent from "@pages/admin/features/product/admin-product.page";
import MainLayoutComponent from "@pages/layout.page";
import SigninComponent from "@pages/signin.page";
import SignupComponent from "@pages/signup.page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" Component={MainLayoutComponent}>
            <Route index Component={CategoriesComponent} />
            <Route
              path="/:categoryName/products"
              Component={ProductComponent}
            />
            <Route
              path="/:categoryName/products/:productId"
              Component={ProductDetailComponent}
            />
          </Route>

          <Route path="/admin" Component={AdminLayoutComponent}>
            <Route index Component={AdminDashboardComponent} />
            <Route path="/admin/products" Component={AdminProductComponent} />
            <Route path="/admin/category" Component={AdminCategoryComponent} />
          </Route>

          <Route path="/sign-in" Component={SigninComponent}></Route>
          <Route path="/sign-up" Component={SignupComponent}></Route>
        </Routes>
        <ReactQueryDevtools
          initialIsOpen={false}
          position="bottom"
        ></ReactQueryDevtools>
      </QueryClientProvider>
    </>
  );
}

export default App;
