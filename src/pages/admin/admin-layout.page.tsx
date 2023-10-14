import AdminFooterComponent from "@pages/admin/admin-footer.page";
import AdminHeaderComponent from "@pages/admin/admin-header.page";
import AdminMainComponent from "@pages/admin/admin-main-page";

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
