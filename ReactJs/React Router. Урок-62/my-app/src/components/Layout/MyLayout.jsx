import React from "react";
import MyNavbar from "../Navbar/container/MyNavbar";
import MyFooter from "../Footer/container/MyFooter";

const MyLayout = ({children}) => {
  return (
    <div>
      <MyNavbar />
      <div style={{ padding: "2rem" }}></div>
      {children}
      <MyFooter />
    </div>
  );
};

export default MyLayout;
