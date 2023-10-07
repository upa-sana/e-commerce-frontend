import { Outlet } from "react-router-dom";

const MainComponent = () => {
  return (
    <main className="main-content-container min-h-screen">
      <Outlet></Outlet>
    </main>
  );
};

export default MainComponent;
