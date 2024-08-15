/* eslint-disable react/prop-types */
import "./ToDoList.css";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ToDoList(props) {
  const trashIcon = <FontAwesomeIcon icon={faTrash} />;
  const editIcon = <FontAwesomeIcon icon={faPenToSquare} />;

  function handleDelete() {
    if (props.onDelete) {
      props.onDelete(props.taskId);
    }
  }
  function handleEdit() {
    if (props.onEdit) {
      props.onEdit(props.taskId);
    }
  }
  function isChecked() {
    if (props.onCheck) {
      props.onCheck();
    }
  }
  return (
    <>
      <div className="ItemDiv">
        <ul className="List">
          <li>
            <input
              type="checkbox"
              className="checkbox"
              id={`checkbox-${props.taskId}`}
              checked={props.completed}
              onChange={isChecked}
            />
            <strong>{props.taskDetails}</strong>
          </li>
          <div className="checkmark"></div>
          <li>
            <span>
              <button className="deletebtn" onClick={handleDelete}>
                {trashIcon}
              </button>
            </span>
            <span>
              <button className="editbtn" onClick={handleEdit}>
                {editIcon}
              </button>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
export default ToDoList;
