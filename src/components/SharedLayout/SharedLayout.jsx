import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";

const SharedLayout = () => {
  return (
    <header>
      <AppBar />
      <Outlet />
    </header>
  );
};
export default SharedLayout;
