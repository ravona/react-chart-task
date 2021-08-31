import "./button.scss";

const Button = ({ text, cbFunc }) => {
  return (
    <button className="button" onClick={cbFunc}>
      {text}
    </button>
  );
};

export default Button;
