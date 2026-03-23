import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const Layout = () => {
  return (
    <div id="content">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
