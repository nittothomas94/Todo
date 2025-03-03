import './card.css';

const Card = ({ todoText, onDeleteClick, onEditClick, onStarClick, color }) => {
  return (
    <div className="card">
      <div className="todotext">
        <h3>{todoText}</h3>
        <h4 className="hello"></h4>
      </div>
      <div className="icons">
        <i
          className="fa-regular fa-star importent"
          onClick={onStarClick}
          style={{ color: color }}
        ></i>
        <i className="fa-solid fa-pen-to-square" onClick={onEditClick}></i>
        <i className="fa-solid fa-trash fa-flip" onClick={onDeleteClick}></i>
      </div>
    </div>
  );
};

export default Card;
