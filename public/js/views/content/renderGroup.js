import app from "../../app.js";
import { kebabCase } from "../../utils/utils.js";
const renderGroup = (group) => 
     app.view.createView(
      "div",
      `
          <h2 class="category-name">${group}</h2>
          `,
      document.getElementById("content"),
      `content_${kebabCase(group)}`,
      "content-activity"
    );
  
  export default renderGroup