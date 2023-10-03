import FotterComponent from "./fotter.page";
import HeaderComponent from "./header.page";
import MainComponent from "./main.page";
import SubHeaderComponent from "./sub-header.page";
const MainLayoutComponent = () => {
  return (
    <section className="outer-container relative">
      <HeaderComponent />
      <SubHeaderComponent />
      <MainComponent />
      <FotterComponent />
    </section>
  );
};

export default MainLayoutComponent;
