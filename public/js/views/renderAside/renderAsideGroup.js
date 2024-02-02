import app from "../../app.js";
import { kebabCase } from "../../utils/utils.js";

const renderAsideGroup = (group) =>
  app.view.createView(
    "div",
    `
              <h3>${group} <i class="fa-solid fa-circle-chevron-down"></i></h3>
                <ul id="sidebar_${kebabCase(group)}">
                </ul>
              `,
    document.getElementById("daily-checklist"),
    null,
    "activity"
  );

export default renderAsideGroup