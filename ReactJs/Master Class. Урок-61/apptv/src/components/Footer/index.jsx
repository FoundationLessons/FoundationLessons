import "./footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <div className="row">
        <div className="row-1">
          <img src="https://allplay.uz/logo.svg" alt="logo" />
          <p>© Copyright</p>
          <p>All Rights Reserved 2023</p>
        </div>
        <div className="row-2">
            <a href="Instagram">
                <p>Instagram Link</p>
            </a>
            <a href="Facebook">
                <p>Facebook Link</p>
            </a>
            <a href="Vk">
                Vkontakte Link
            </a>
        </div>
        <div className="row-3">
        <a href="war">
                <p>War Films</p>
            </a>
            <a href="cartoon">
                <p>Cartoon Films</p>
            </a>
            <a href="fantasy">
                Fantasy Films
            </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
