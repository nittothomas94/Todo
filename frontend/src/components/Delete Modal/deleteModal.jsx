import Button from '../Button/button';
import './deleteModal.css';

const DeleteModal = ({ show, onCancelClick, onDeleteClick02 }) => {
  return (
    <div style={{ display: show ? 'block' : 'none' }} className="main">
      <div className="ModalCover" onClick={onCancelClick}></div>
      <div className="modal-box">
        <h1>Are You sure You want to delete the todo item</h1>
        <div className="buttons">
          <Button
            text="Cancel"
            classname="but cancel"
            onclick={onCancelClick}
          />
          <Button
            text="Delete"
            classname="but deletee"
            onclick={onDeleteClick02}
          />
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
