import { AdminContentComponent } from "@pages/admin/admin-content.page";
import { SideBarComponent } from "@pages/admin/side-bar.page";

const AdminMainComponent = () => {
  return (
    <div className="main-container flex h-screen">
      <SideBarComponent />
      <AdminContentComponent />
    </div>
  );
};

export default AdminMainComponent;
