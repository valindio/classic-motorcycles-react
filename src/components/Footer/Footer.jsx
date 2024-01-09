import Section from "../Section/Section";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <Section forSection={"footer__container"}>
        <div className="footer__col">
          <img src="/src/assets/logo.png" alt="Logo" />
          <div className="footer__socials">
            <a className="ri-facebook-fill" href=""></a>
            <a className="ri-twitter-fill" href=""></a>
            <a className="ri-instagram-fill" href=""></a>
            <a className="ri-youtube-fill" href=""></a>
          </div>
          <div className="footer__bar">
            Copyright © 2023 Web Design Mastery. All rights reserved.
          </div>
        </div>
        <div className="footer__col">
          <h4>Newsletter Signup</h4>
          <p>Sign Up to get the latest news.</p>
          <form action="/">
            <input type="text" placeholder="Your Email Address" />
            <button className="btn">Send</button>
          </form>
        </div>
        <div className="footer__col">
          <h4>Contact Us</h4>
          <p> 8-1-284/OU/48-B, Opp. AIG Hospitals, Lanco Hills</p>
          <p> +91 987 654 321</p>
          <p>classic@info.com</p>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
