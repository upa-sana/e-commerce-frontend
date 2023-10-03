import { Outlet } from "react-router-dom";

const MainComponent = () => {
  return (
    <section className="main-content-container min-h-screen">
      <Outlet></Outlet>
    </section>
  );
};

export default MainComponent;
