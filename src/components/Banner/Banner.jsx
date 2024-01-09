import "./Banner.css";
import BannerCard from "./BannerCard";
import BannerStripCard from "./BannerStripCard";

const Banner = () => {
  return (
    <>
      <div className="banner__grid">
        <BannerCard image={"/src/assets/banner-1.jpg"}>Our Teams</BannerCard>
        <BannerCard>Workshop</BannerCard>
        <BannerCard>Services & Repairs</BannerCard>
        <BannerCard image={"/src/assets/banner-2.jpg"}>
          Custom Builds
        </BannerCard>
        <img src="/src/assets/logo.png" alt="Logo" />
      </div>
      <div className="banner__strip">
        <BannerStripCard image={"/src/assets/banner-3.jpg"} alt={"Great Racer"}>
          Great
          <br />
          Cafe Racer
        </BannerStripCard>
        <BannerStripCard image={"/src/assets/banner-4.jpg"} alt={"Great Racer"}>
          Yamaha
          <br />
          X10000
        </BannerStripCard>
        <BannerStripCard image={"/src/assets/banner-5.jpg"} alt={"Great Racer"}>
          Custom Made
          <br />
          Scrambler
        </BannerStripCard>
        <BannerStripCard image={"/src/assets/banner-6.jpg"} alt={"Great Racer"}>
          Motorcycles Gears
          <br />
          And Wears
        </BannerStripCard>
        <BannerStripCard image={"/src/assets/banner-7.jpg"} alt={"Great Racer"}>
          Custom
          <br />
          Modification
        </BannerStripCard>
        <BannerStripCard image={"/src/assets/banner-8.jpg"} alt={"Great Racer"}>
          Cool Jwellery
          <br />
          For Bikers
        </BannerStripCard>
      </div>
    </>
  );
};

export default Banner;
