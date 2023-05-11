import React from "react";
import logo from "../../Image/watchs.png";

function Seaction3() {
  return (
    <div>
      <div className="section-3 container-fluid text-center pt-5">
        <div className="iphone-11">
          <img src={logo} />
        </div>
        <div className="ahead">A healthy leap ahead</div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="#">Learn More</a>
            </li>
            <li>
              <a href="#">Buy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Seaction3;
