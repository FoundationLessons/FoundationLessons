import React from "react";
import "./AppDesign.css";
import appcard1 from "./card-img.svg";
import appcard2 from "./app-card-2.svg";
import appcard3 from "./app-card-3.svg";
import appcard4 from "./app-card-4.svg";
import appcard5 from "./app-card-5.svg";
const AppDesign = () =>{
    return(
        <div className="app-design-container">
            <div className="container">
                    <div className="app-main-title">
                        <h1>App Design</h1>
                        <p>Our mobile designs bring intuitive digital solutions <br /> to your customers right at their fingertips.</p>
                    </div>
                <div className="app-card-handler">
                    <div className="app-card-container">
                        <div className="app-card">
                            <div className="app-cards">
                                    <img src={appcard1} alt="image" />
                            </div>
                            <div className="app-card-text">
                                <div className="app-card-title">
                                    <h1>Express</h1>
                                </div>
                                <div className="app-card-p">
                                <p>Solving the problem of poor indoor air quality by filtering the air</p>
                                </div>
                            </div>
                        </div> 
                        <div className="app-card">
                            <div className="app-cards" id="card-2">
                                    <img src={appcard2} alt="image" />
                            </div>
                            <div className="app-card-text">
                                <div className="app-card-title">
                                    <h1>Eyecam</h1>
                                </div>
                                <div className="app-card-p">
                                <p>Product that lets you edit your favorite photos and videos at any time</p>
                                </div>
                            </div>
                        </div> 
                        <div className="app-card">
                            <div className="app-cards" id="card-3">
                                    <img src={appcard3} alt="image" />
                            </div>
                            <div className="app-card-text">
                                <div className="app-card-title">
                                    <h1>Faceit</h1>
                                </div>
                                <div className="app-card-p">
                                <p>Get to meet your favorite internet superstar with the faceit app</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="app-card-container">
                        <div className="app-card">
                            <div className="app-cards" id="card-4">
                                    <img src={appcard4} alt="image" />
                            </div>
                            <div className="app-card-text">
                                <div className="app-card-title">
                                    <h1>Todo</h1>
                                </div>
                                <div className="app-card-p">
                                <p>A todo app that features cloud sync with light and dark mode</p>
                                </div>
                            </div>
                        </div> 
                        <div className="app-card">
                            <div className="app-cards" id="card-5">
                                    <img src={appcard5} alt="image" />
                            </div>
                            <div className="app-card-text">
                                <div className="app-card-title">
                                    <h1>Loopstudios</h1>
                                </div>
                                <div className="app-card-p">
                                <p>A VR experience app made for <br /> Loopstudios</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                   
                <div className="app-main-links">
                    <div className="app-link-left">
                        <section className="app-link-img-0">
                            <h1>Web Design</h1>
                            <p>View Projects <span style={{color: "chocolate"}}>→</span></p>
                        </section>
                    </div>
                    <div className="app-link-right">
                        <section className="web-link-img-1">
                            <h1>App Design</h1>
                            <p>View Projects <span style={{color: "chocolate"}}>→</span></p>
                        </section>
                        <section className="web-link-img-2">
                            <h1>Graphic Design</h1>
                            <p>View Projects <span style={{color: "chocolate"}}>→</span></p>
                        </section>
                    </div>
                </div>
                <div className="app-about-project">
                    <div className="app-about-left">
                        <div className="app-about-text">
                            <h1>Let's talk about your project</h1>
                        </div>
                        <div className="app-about-text-p">
                            <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                        </div>
                    </div>
                    <div className="app-about-right">
                            <button id="app-btn">Get in touch</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AppDesign;