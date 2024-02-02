import app from "../../app.js";
import { kebabCase } from "../../utils/utils.js";
const renderAsideCategory = (category, group) =>
    app.view.createView(
      "li",
      category,
      document.getElementById(`sidebar_${kebabCase(group)}`)
    );
  export default renderAsideCategory