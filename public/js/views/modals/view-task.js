import app from "../../app.js";
import { kebabCase } from "../../utilities/utilities.js";

export const removePopup = () => {
  let popup = document.querySelector(".task-details-popup");

  if (popup) {
    popup.remove();
  }
}

const taskModal = (task, disabled) => {
  removePopup();
  const detailsPopup = app.view.createElement(
    "div",
    `<div class="task-details-popup">
          <div class="task-details-content">
              ${renderCloseDetailsButton()}
              <h2>Task Details</h2>
              <div class="task-details">
                  <label for="task_${kebabCase(task.name)}">Task Name:</label>
                  <input type="text" disabled=${disabled} value="${task.name}" id="task_${kebabCase(
      task.name
    )}-input" name="task_${kebabCase(task.name)}">
              </div>
              <div class="task-details">
                  <label for="category_${kebabCase(
                    task.category
                  )}">Category Name:</label>
                  <input type="text" disabled=${disabled} value="${
                    task.category
                  }" id="category_${kebabCase(
      task.category
    )}-input" name="category_${kebabCase(task.name)}">
              </div>
              <div class="task-details">
                  <label for="description-name">Description:</label>
                  <input type="text" disabled=${disabled} value="${task.name}" id="desc_${kebabCase(
      task.name.slice(0, 20)
    )}" name="description-name" size="50">
              </div>
              <div class="task-details">
                  <label for="modal-subtask">Subtask:</label>
                  <input type="checkbox" disabled=${disabled} id="modal-subtask" name="modal-subtask" value="subtask">
                  <input type="text" disabled=${disabled} id="modal-subtask" name="modal-subtask" placeholder="Add subtask...">
              </div>
              <div class="task-details">
                  <label for="modal-date">Date:</label>
                  <input type="text" disabled=${disabled} id="modal-date" name="modal-date">
              </div>
              <div class="task-details">
                  <label for="modal-time">Time:</label>
                  <input type="text" disabled=${disabled}  id="modal-time" name="modal-time">
              </div>
              <div class="task-details">
                  <label for="priority-level">Priority:</label>
                  <select id="priority-level" name="priority-level">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                  </select>
              </div>
              <textarea id="notes" name="notes" class="task-details" placeholder="Notes..."></textarea>
              <a href="#" class="btn btn-save btn-detail" id="save-task-details">Save</a>
          </div>
      </div>`,
    document.getElementById("app"),
    null,
    "task-details-popup"
  ).container;

  const closeDetailsButton = document.getElementById("close-details-popup");

  closeDetailsButton.addEventListener("click", function () {
    removePopup();
  });

  return detailsPopup;
}

const renderTaskDetailsPopup = () => {

  const openDetailsButtons = document.querySelectorAll(".fa-circle-info");

  openDetailsButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("details here!");
      const taskData = JSON.parse(this.getAttribute('data-my-object'));
      const disabled = true;
      const detailsPopup = taskModal(taskData, disabled);
      detailsPopup.style.display = "block";
    });
  });

  const updateDetailsButtons = document.querySelectorAll(".icon-update");
  

  // const closeDetailsButton = document.querySelector(".close-details-popup");

  // closeDetailsButton.addEventListener("click", function () {
  //   detailsPopup.style.display = "none";
  // });
};

// Details Popup for tasks
const renderCloseDetailsButton = () => {
  const button = document.createElement("i");
  button.classList = "fa-solid fa-xmark fa-2x close-details-popup";
  button.id = 'close-details-popup';
  return button.outerHTML;
};

export default renderTaskDetailsPopup;
