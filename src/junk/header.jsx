import React from "react";
import bag from "../../assets/pic/bag2.png";
export const Header = () => {
  return (
    <div>
      <header>
        <div id="AD">
          <h1>
            YOUR EVERYDAY, DELIVERED <span>FOR FREE</span>
            <img src={bag} alt="please wait" />
          </h1>
        </div>
        <div id="NO">
          <p>
            To Order
            <br />
            <span>0816 890 2838</span>
          </p>
        </div>
        <button>{/* <FaBars /> */}</button>
      </header>
    </div>
  );
};