import "./BannerStripCard.css";

/* eslint-disable react/prop-types */
const BannerStripCard = ({ children, image, alt }) => {
  return (
    <div className="banner__strip__card">
      <img src={image} alt={alt} />
      <div>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default BannerStripCard;
