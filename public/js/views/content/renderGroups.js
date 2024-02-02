import app from "../../app.js";
import renderGroup from './renderGroup.js';
import renderCategory from './renderCategory.js';
const renderGroups = () =>
  app.controller.returnUniqueGroupNames().map((group) => {
    renderGroup(group);
    app.controller.returnUniqueCategoriesByGroup(group).map((category) => {
      renderCategory(group, category);
    });
  });

  export default renderGroups
