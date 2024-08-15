/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Addbtn.css";
function Add(props) {
  const [add, setAdd] = useState("");

  function handleAdd() {
    if (props.onAdd && add.trim() !== "") {
      props.onAdd(add);
      setAdd("");
    } else {
      alert("please enter a task");
    }
  }

  return (
    <>
      <div className="btn">
        <input
          type="text"
          placeholder="Enter new Task"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
        <select id="choose" name="Tasks" onChange={props.onCheck}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
    </>
  );
}
export default Add;
