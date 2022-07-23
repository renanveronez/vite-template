import { Header } from "../../Components/Header";
import { LayoutContainer } from "./styles";
import { Outlet } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { MenuDesktop } from "../../Components/Header/MenuDesktop";
// import MenuMobile from "../../Components/Header/MenuMobile";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      {/* <Header /> */}
      <MenuDesktop />
      {/* <MenuMobile /> */}
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
}
