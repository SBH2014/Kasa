import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Card() {
  const [HousingData, setHousingData] = useState([]);
  useEffect(() => {
    axios.get("../data.json").then(function (res) {
      setHousingData(res.data);
    });
  }, []);
  if (!HousingData.length) {
    return <div className="loader"></div>;
  }
  return (
    <div className="div_flex">
      <div className="housing">
        {HousingData.map((card, index) => (
          <Link
            to={{ pathname: "/Housing", search: "?_id=" + card.id }}
            className="housing__fiche"
            key={index}
          >
            <img src={card.cover} alt={card.title} />
            <h3>{card.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
//Indique le type des props
Card.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;
