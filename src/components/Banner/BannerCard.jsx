import "./BannerCard.css";

/* eslint-disable react/prop-types */
const BannerCard = ({ children, image }) => {
  return (
    <div className="banner__card">
      <h4>{children}</h4>
      {image ? (
        <img className="card__image" src={image} alt="Banner-1" />
      ) : (
        <span className="card__image"></span>
      )}
    </div>
  );
};

export default BannerCard;
