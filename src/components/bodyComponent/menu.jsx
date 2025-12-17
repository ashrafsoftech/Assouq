import { useUserContext } from "../../UserContext";
import { menu } from "../../data";
import { useState, useRef } from "react";
import { FaPhoneAlt, FaStore, FaShippingFast } from "react-icons/fa";
import Slider from "./slider";

const Menu = () => {
  // const [hovered, setHovered] = useState(null);
  // const timeoutRef = useRef(null);

  // const handleEnter = (id) => {
  //   clearTimeout(timeoutRef.current);
  //   setHovered(id);
  // };

  const { handleLeave, handleEnter, hovered } = useUserContext();
  return (
    <article className="page">
      <div className="call">CALL TO ORDER 08168902838, 08168902838</div>

      <section className="menu" onMouseLeave={handleLeave}>
        {/* left menu */}
        <div className="menu-left">
          <ul>
            {menu.map((list) => (
              <li
                key={list.id}
                onMouseEnter={() => handleEnter(list.id)}
                className="menu-item"
              >
                <a href={list.url} className="flex items-center gap-2">
                  {list.icon && <list.icon />}
                  {list.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* middle slider */}
        <div className="menu-slider">
          {!hovered && (
            <div className="page2">
              <Slider />
            </div>
          )}
          {hovered && (
            <div
              className="submenu-grid"
              onMouseEnter={() => handleEnter(hovered)} // keep it alive
              onMouseLeave={handleLeave} // close only when leaving submenu
            >
              {menu
                .find((m) => m.id === hovered)
                ?.submenu?.map((section) => (
                  <div key={section.id} className="submenu-column">
                    <h4>{section.header}</h4>
                    <hr />
                    <ul>
                      {section.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* extras */}
        <div className="menu-extras">
          <div className="extra">
            <div>
              <p>
                <FaPhoneAlt
                  style={{
                    border: "1px solid black",
                    borderRadius: "1em",
                    padding: ".2em",
                    width: "24px",
                    height: "24px",
                    borderColor: "orange",
                    color: "orange",
                  }}
                />
                <a href="https://fonts.google.com/?preview.text=Appliances">
                  CALL TO ORDER <span>0816-890-2838, 0816-890-2838</span>
                </a>
              </p>
            </div>

            <div>
              <p>
                <FaStore
                  style={{
                    border: "1px solid black",
                    borderRadius: "1em",
                    padding: ".2em",
                    width: "24px",
                    height: "24px",
                    borderColor: "orange",
                    color: "orange",
                  }}
                />
                <a href="https://fonts.google.com/?preview.text=Appliances">
                  Sell on Jumia
                </a>
              </p>
            </div>

            <div>
              <p>
                <FaShippingFast style={{ width: "20px", color: "orange" }} />
                <a href="https://fonts.google.com/?preview.text=Appliances">
                  Send your Packages
                </a>
              </p>
            </div>
          </div>

          <div className="gif">page3.2</div>
        </div>
      </section>
    </article>
  );
};

export default Menu;
