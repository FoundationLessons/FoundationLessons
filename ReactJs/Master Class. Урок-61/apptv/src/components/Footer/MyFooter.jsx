import React from "react";
import "./MyFooter.css"
const MyFooter = () =>{
    return(
        <div className="footer-container">
           <div className="footer-frame">
                <div className="footer-main-links">
                        <div className="oval"></div>
                        <h1>Designo</h1>
                </div>
                <div className="footer-link">
                        <ul>
                            <li>Our Company</li>
                            <li>Locations</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
           </div>
           <hr style={{border: '2px solid lightgray'}}/>
        </div>
    )
}

export default MyFooter;