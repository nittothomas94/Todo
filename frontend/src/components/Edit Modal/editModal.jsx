import Input from '../Input/input';
import Button from '../Button/button';
import './editModal.css';

const EditModal = ({
  show,
  onCancelClick,
  onDeleteClick02,
  onChangeText,
  onEditClick,
}) => {
  return (
    <div style={{ display: show ? 'block' : 'none' }} className="main">
      <div className="modal-cover" onClick={onCancelClick}></div>
      <div className="modal-box">
        <input type="text" onChange={onChangeText} />
        <div className="buttons">
          <Button
            text="Cancel"
            classname="but cancel"
            onclick={onCancelClick}
          />
          <Button text="Edit" classname="but deletee" onclick={onEditClick} />
        </div>
      </div>
    </div>
  );
};
export default EditModal;
