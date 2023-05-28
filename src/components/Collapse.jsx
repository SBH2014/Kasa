import arrowUp from "../assets/arrow2.png";
import arrowDown from "../assets/arrow.png";
import { useState } from "react";
function Collapse({ title, content, i }) {
  //collapse par defaut comme fermé
  const [isCollapsed, setIsCollapsed] = useState(false);
  const collapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="collapse">
      <div className="collapse__accordion">
        <div className="collapse__item" key={title}>
          <div className="collapse__item-title" onClick={() => collapse()}>
            <h3>{title}</h3>
            <img src={isCollapsed ? arrowUp : arrowDown} alt="arrow_collapse" />
          </div>
          <div
            className={
              isCollapsed
                ? "collapse__item-contentShow"
                : "collapse__item-content"
            }
          >
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Collapse;
