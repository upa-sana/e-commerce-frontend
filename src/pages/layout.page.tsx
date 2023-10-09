import { FotterComponent } from "@pages/fotter.page";
import { HeaderComponent } from "@pages/header.page";
import { MainComponent } from "@pages/main.page";
import { SubHeaderComponent } from "@pages/sub-header.page";
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
