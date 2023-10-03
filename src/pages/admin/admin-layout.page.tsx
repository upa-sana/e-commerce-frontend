import AdminFooterComponent from "./admin-footer.page";
import AdminHeaderComponent from "./admin-header.page";
import AdminMainComponent from "./admin-main-page";

const AdminLayoutComponent = () => {
  return (
    <>
      <AdminHeaderComponent />
      <AdminMainComponent />
      <AdminFooterComponent />
    </>
  );
};

export default AdminLayoutComponent;
