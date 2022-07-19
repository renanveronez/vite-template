import { Header } from "../../Components/Header";
import { LayoutContainer } from "./styles";
import { Outlet } from "react-router-dom";
import { Footer } from "../../Components/Footer";
// import MenuMobile from "../../Components/Header/MenuMobile";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/* <MenuMobile /> */}
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
}
