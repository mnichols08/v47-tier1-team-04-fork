import app from "../../app.js";
import renderAside from "./renderAside.js";
import renderAsideGroup from "./renderAsideGroup.js";
import renderAsideCategory from "./renderAsideCategory.js";
// a method which takes a title as an argument and creates a new view from html created by emmett only dynamically creating the title
export default function renderAsideGroups(title) {
  renderAside(title);
 
  app.controller.returnUniqueGroupNames().map((group) => {
    renderAsideGroup(group);
    app.controller
      .returnUniqueCategoriesByGroup(group)
      .map((category) => renderAsideCategory(category, group));
  });
  // this returns each object within a group providing us access to more data than just the returnGroupNames() gives. so now we can create a new view on each group for each unique category we have
}
