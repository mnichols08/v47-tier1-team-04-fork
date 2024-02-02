import app from "../../app.js";
import { kebabCase } from "../../utils/utils.js";
const renderCategory = (group, category) =>
    app.view.createView(
      "div",
      `
          <div class="content-main">
            <img src="./img/Ellipse8.svg" alt=" ellipse checkbox" class="ellipse">
            <div class="content-inner">
              <div class="content-task">
                <h3 class="activity">${category}</h3> <a href="#" class="btn btn-lite btn-blue">Low</a>
              </div>
              <div class="content-description">
                                      
              </div>
            </div>
          </div>
          `,
      document.getElementById(`content_${kebabCase(group)}`),
      `category_${kebabCase(category)}`
    );
  export default renderCategory