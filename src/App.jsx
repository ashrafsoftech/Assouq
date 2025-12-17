import { UserProvider } from "./UserContext";

import { Header } from "./components/headerComponents/header";
import { Nav } from "./components/headerComponents/nav";
import Menu from "./components/bodyComponent/menu";
import Slideone from "./components/bodyComponent/sliders/slideone";
import { FlashSale } from "./components/bodyComponent/sliders/flashsale/flashsale";
const App = () => {
  return (
    <UserProvider>
      <main>
        <Header />
        <Nav />
        {/* Shared container for main content */}
        <div className="content-container section-wrapper">
          <Menu />
          <Slideone />
          <FlashSale />
        </div>
      </main>
    </UserProvider>
  );
};

export default App;
