import "./SocialMedia.css";
import { igImage } from "../../data/instagram.js";

const SocialMedia = () => {
  return (
    <>
      <div className="section__header">Instagram</div>
      <div className="instagram__flex">
        {igImage.map((image) => (
          <img key={image.id} src={image.source} alt="Instagram Photo" />
        ))}
        {igImage.map((image) => (
          <img
            key={image.id}
            src={image.source}
            alt="Instagram Photo"
            aria-hidden="true"
          />
        ))}
      </div>
    </>
  );
};

export default SocialMedia;
