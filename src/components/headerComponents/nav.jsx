import { useState } from "react";
import logo from "../../assets/pic/logo.png";
import account from "../../assets/pic/account.png";
import cart from "../../assets/pic/cart.png";
import help from "../../assets/pic/question_mark.png";
import {
  FaBars,
  FaUser,
  FaShoppingCart,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaBox,
  FaRegHeart,
  FaEnvelope,
  FaTicketAlt,
  FaComment,
  FaComments,
  FaRegCommentDots,
} from "react-icons/fa";
import { useUserContext } from "../../UserContext";
import Dropdown from "./dropdown";
import { helpData } from "../../data";

export const Nav = () => {
  const [showAccDropdown, setshowAccDropdown] = useState(false);
  const [showHelpDropdown, setshowHelpDropdown] = useState(false);

  const { toggleLink, signedIn, signIn, logout } = useUserContext();

  return (
    <nav>
      <div className="nav-center">
        <div className="nav header">
          {/* Desktop layout */}
          <div className="nav-left">
            <button className="nav-toggle" onClick={toggleLink}>
              <FaBars />
            </button>
            <img className="logo" src={logo} alt="logo" />
          </div>

          <div className="search">
            <label htmlFor="search"></label>
            <input
              type="search"
              placeholder="search products, brands, categories"
            />
            <button className="btn" type="submit">
              Search
            </button>
          </div>

          <div className="items">
            <div className="account-wrapper">
              <a
                href="#"
                className="account-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setshowAccDropdown((s) => !s);
                }}
              >
                <FaUser className="icon" />
                <p>Account</p>
                {showAccDropdown ? (
                  <FaChevronUp className="up" />
                ) : (
                  <FaChevronDown className="down" />
                )}
              </a>
              {/* Dropdown menu */}
              {showAccDropdown && (
                <div className="account-dropdown">
                  {signedIn ? (
                    <ul>
                      <li>
                        <FaUser />
                        <a href="#">My Account</a>
                      </li>
                      <li>
                        <FaBox />
                        <a href="#">Orders</a>
                      </li>
                      <li>
                        <FaEnvelope />
                        <a href="#">Inbox</a>
                      </li>
                      <li>
                        <FaRegHeart />
                        <a href="#">Wishlist</a>
                      </li>
                      <li>
                        <FaTicketAlt />
                        <a href="#">Voucher</a>
                      </li>
                      <hr
                        style={{
                          width: "100%",
                          margin: 0,
                          height: ".1em",
                          backgroundColor: "rgb(109, 99, 99)",
                        }}
                      />
                      <li>
                        <a href="#" onClick={logout}>
                          Logout
                        </a>
                      </li>
                    </ul>
                  ) : (
                    <ul>
                      <li className="signIn">
                        <button>
                          <a href="#" onClick={signIn}>
                            Sign In
                          </a>
                        </button>
                      </li>
                      <hr
                        style={{
                          width: "100%",
                          margin: 0,
                          height: ".1em",
                          backgroundColor: "rgb(109, 99, 99)",
                        }}
                      />
                      <li>
                        <FaUser />
                        <a href="#">My Account</a>
                      </li>
                      <li>
                        <FaBox />
                        <a href="#">Orders</a>
                      </li>

                      <li>
                        <FaRegHeart />
                        <a href="#">Wishlist</a>
                      </li>
                    </ul>
                  )}
                </div>
              )}
            </div>

            <div className="help-wrapper">
              <a
                href="#"
                className="account-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setshowHelpDropdown((s) => !s);
                }}
              >
                <FaQuestionCircle className="icon" />
                <p>Help</p>
                {showHelpDropdown ? (
                  <FaChevronUp className="up" />
                ) : (
                  <FaChevronDown className="down" />
                )}
              </a>
              {showHelpDropdown && (
                <div className="help-dropdown">
                  <ul>
                    {helpData.map((helpList) => {
                      return (
                        <li key={helpList.id}>
                          <a href={helpList.url}>{helpList.text}</a>
                        </li>
                      );
                    })}
                  </ul>
                  <hr />
                  <button className="livechat">
                    <FaRegCommentDots
                      size={24}
                      style={{
                        marginLeft: "1em",
                        fontSize: "24px",
                        fontWeight: "bolder",
                        color: "white",
                      }}
                    />
                    <a href="#">Live Chat</a>
                  </button>
                </div>
              )}
            </div>

            <div>
              <a href="#" className="cart">
                <FaShoppingCart className="icon" />
                <p>Cart</p>
              </a>
            </div>
          </div>
        </div>
        <Dropdown />
      </div>
    </nav>
  );
};
