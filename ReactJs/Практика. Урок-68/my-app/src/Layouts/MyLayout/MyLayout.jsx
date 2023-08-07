import MyNavbar from "../Navbar/MyNavbar";
import MyFooter from "../Footer/MyFooter";
import "./MyLayout.css"
const MyLayout = ({ children }) => {
    return (
      <div className="layout-container">
        <MyNavbar />
        <div style={{ padding: "2rem"}}></div>
        {children}
        <MyFooter />
      </div>
    );
  };
  
  export default MyLayout;