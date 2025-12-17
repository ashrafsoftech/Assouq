import bag from "../../assets/pic/bag.png";
import logo from "../../assets/pic/logo.png";
import { FaStar, FaShieldAlt } from "react-icons/fa";

export const Header = () => {
  return (
    <article>
      <header>
        <img id="img" src={bag} alt="please wait" />
        <p id="p">
          <a target="_blank" href="#" className="sell" rel="noreferrer">
            Sell On Assouq
          </a>
        </p>

        <img className="logo" src={logo} alt="logo" />

        <div className="pay">
          <FaShieldAlt className="icon" />
          <a target="_blank" href="#" rel="noreferrer">
            PAY
          </a>
        </div>

        <div className="pay">
          <FaStar className="icon" />
          <a
            style={{ fontWeight: "bolder" }}
            target="_blank"
            href="#"
            rel="noreferrer"
          >
            DELIVERY
          </a>
        </div>
      </header>
      {/* IMPORTANT: pass `nav`, not `nv` */}
      {/* <Nav nav={nav} /> */}
      {/* {(nav = [])} */}
    </article>
  );
};
