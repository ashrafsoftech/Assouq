import { FaTimes } from "react-icons/fa"; // classic X
import { FaAngleRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { links } from "../../data";
import logo from "../../assets/pic/logo.png";
import { useUserContext } from "../../UserContext";

const Dropdown = ({ show = false }) => {
  const { showLink, cancelLink } = useUserContext();
  return (
    <div
      className={
        showLink ? "links-container show-container" : "links-container"
      }
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1em",
          padding: "0.2rem 0 0 1em",
        }}
      >
        <FaTimes
          onClick={cancelLink}
          style={{
            cursor: "pointer",
            fontSize: "1.5rem",
            color: "orange",
          }}
        />
        <img style={{ width: "150px" }} src={logo} alt="logo" />
      </div>

      <hr />
      <div className="help">
        <p>
          <a href="#">
            NEED HELP
            <FaAngleRight />
          </a>
        </p>
      </div>

      <hr />

      <div className="acc">
        <p>
          <a href="#">
            MY ASSOUQ ACCOUNT
            <FaAngleRight />
          </a>
        </p>

        <ul className="links">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <a href={item.url}>
                  <Icon style={{ marginRight: "8px" }} />
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <hr />
      <br />

      <div className="acc">
        <p>
          <a href="#">
            OUR CATEGORIES
            <FaAngleRight />
          </a>
        </p>

        <ul className="links">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <a href={item.url}>
                  <Icon style={{ marginRight: "8px" }} />
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Dropdown;
