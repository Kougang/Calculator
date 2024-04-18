import "./style/Button.css";
const Button = ({ label, onClick }) => (
  <button onClick={() => onClick(label)}>{label}</button>
);

export default Button;
