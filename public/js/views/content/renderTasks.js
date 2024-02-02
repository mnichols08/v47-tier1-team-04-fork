import app from "../../app.js";
import { kebabCase } from "../../utils/utils.js";

export function renderTask(task) {
  const anchor = document.querySelector(
    `#category_${kebabCase(task.category)} .content-description`
  );
  app.view.createView("p", task.name, anchor);
  app.view.createView(
    "div",
    `
    <img src="./img/mynaui_pencil.svg" alt="edit pencil image" class="icon-edit">
    <img src="./img/ph_trash.svg" alt="delect trash can image" class="icon-edit">
    `,
    anchor,
    "content-description-edit"
  );
}
const renderTasks = () =>
  app.controller.readAllTasks().map((task) => renderTask(task));
export default renderTasks;
