import './button.css';

const Button = ({ classname, text, onclick }) => {
  return (
    <button className={classname} onClick={onclick}>
      {text}
    </button>
  );
};

export default Button;
