import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import "./Rate.css";

function StarRating({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <FontAwesomeIcon key={i} icon={solidStar} className="star-icon star" />
      );
    } else {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={solidStar}
          className="star-icon empty-star"
        />
      );
    }
  }

  return <div className="rating">{stars}</div>;
}

export default StarRating;
