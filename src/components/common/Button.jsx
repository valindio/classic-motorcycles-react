import "./Button.css";

/* eslint-disable react/prop-types */
const Button = ({ children }) => {
  return <button className="btn">{children}</button>;
};

export default Button;
