import { Outlet } from "react-router-dom";

const AdminContentComponent = () => {
  return (
    <section className="admin-main-content w-full h-auto p-4 m-4 border shadow-md">
      <Outlet></Outlet>
    </section>
  );
};

export default AdminContentComponent;
