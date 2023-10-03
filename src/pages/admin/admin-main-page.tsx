import AdminContentComponent from "./admin-content.page";
import SideBarComponent from "./side-bar.page";

const AdminMainComponent = () => {
  return (
    <div className="main-container flex h-screen">
      <SideBarComponent />
      <AdminContentComponent />
    </div>
  );
};

export default AdminMainComponent;
