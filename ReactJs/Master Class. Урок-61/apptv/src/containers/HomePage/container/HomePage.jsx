import React from "react";
import "./HomePage.css";
import man_1 from "./man_1.svg";
import man_2 from "./man_2.svg";
import man_3 from "./man_3.svg";
import img from "./img.svg";

const HomePage = () => {
  return (
    <div className="layout-container">
      <div className="layout-main-frame">
        <div className="layout-left-content">
          <h1>
            Award-winning custom <br /> designs and digital <br />
            branding solutions
          </h1>
          <p>
            With over 10 years in the industry, we are experienced in <br />{" "}
            creating fully responsive websites, app design, and engaging <br />{" "}
            brand experiences. Find out more about our services.
          </p>
          <button>Learn More</button>
        </div>
        <div className="layout-right-content">
          <div className="right-oval"></div>

          <div className="layout-right-phone">
            <img src={img} alt="image" />
          </div>
        </div>
      </div>
      <div className="layout-main-links">
        <div className="web-design">
          <h1>Web Design</h1>
          <p>
            View Projects <span id="span"></span>
          </p>
        </div>

        <div className="secondary-links">
          <div className="app-design">
            <h1>App-design</h1>
            <p>
              View Projects <span id="span"></span>
            </p>
          </div>
          <div className="graphic-design">
            <h1>Graphic-design</h1>
            <p>
              View Projects <span id="span"></span>
            </p>
          </div>
        </div>
      </div>

      <div className="layout-infos">
        <div className="layout-cards">
          <div className="card1">
            <img src={man_1} />
            <h1>Passionate</h1>
            <p>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
          <div className="card2">
            <img src={man_2} />
            <h1>Resourceful</h1>
            <p>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients' needs.
            </p>
          </div>
          <div className="card3">
            <img src={man_3} />
            <h1>Friendly</h1>
            <p>
              {" "}
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </div>

      <div className="layout-about-project">
        <div className="left-project-text">
          <h1>Let's talk about your project</h1>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div className="right-project-btn">
          <button>Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
