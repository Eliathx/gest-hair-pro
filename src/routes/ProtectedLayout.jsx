import { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
function ProtectedLayout() {
  const [isLoggedIn] = useState(true);
  return (
    isLoggedIn && (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  );
}
export default ProtectedLayout;
