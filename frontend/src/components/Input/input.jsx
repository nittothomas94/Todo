import './input.css';

const Input = ({ type, onchange, value, onKeyPress }) => {
  return (
    <>
      <input
        type={type}
        onChange={onchange}
        value={value}
        placeholder="type here for adding new todo item"
        onKeyDown={onKeyPress}
      />
    </>
  );
};

export default Input;
