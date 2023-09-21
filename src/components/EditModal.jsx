import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateTask } from "../utils/taskSlice";
import "../assets/Modal.css";
import toast from "react-hot-toast";

function EditModal({ setIsEditModal, handleUpdateCard, editId }) {
  const dispatch = useDispatch();
  const taskItem = useSelector((store) => store.task);
  const editItem = taskItem.filter((item) => item.id === editId);
  const [{ title, date, priority }] = editItem;

  const titleRef = useRef(null);
  const priorityRef = useRef(null);
  const dateRef = useRef(null);

  const handleEdit = () => {
    const editPayload = {
      taskId: editId,
      updatedTitle: titleRef.current.value || title,
      updatedDate: dateRef.current.value || date,
      updatedPriority: priorityRef.current.value || priority,
    };
    dispatch(updateTask(editPayload));
    toast.success('updated successfully');
    titleRef.current.value = "";
    priorityRef.current.value = null;
    dateRef.current.value = null;
    setIsEditModal(false);
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <button
          onClick={() => setIsEditModal(false)}
          type="button"
          className="modal-close-button p-4"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <div className="mb-4">
          <label htmlFor="name" className="modal-label">
            Update task
          </label>
          <div className="modal-inputs">
            <input
              ref={titleRef}
              defaultValue={title}
              type="text"
              name="name"
              id="name"
              className="modal-input"
              placeholder="Title"
            />
            <select
              ref={priorityRef}
              defaultValue={priority}
              name="priority"
              id="priority"
              className="modal-input"
              placeholder="Select Priority"
            >
              <option defaultValue value="">
                Select Priority
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <input
              ref={dateRef}
              defaultValue={date}
              type="date"
              name="date"
              id="date"
              className="modal-input"
            />
          </div>
        </div>
        <button onClick={handleEdit} className="modal-button w-1/2 flex items-center justify-center rounded-full">
          Save
        </button>
      </div>
    </div>
  );
}

export default EditModal;
