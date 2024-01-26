import clearMain, { main } from "../utils/docVars.js";
import createEle from "../utils/createEle";
import controller from "../controls/index.controller.js";

const init = () => {
  // run the clear function
  clearMain();
  // create a section element, fill in the section element with the HTML from index.html and append the section element to the anchor container
  createEle("h1", `All Tasks`, main);
  createEle(
    "table",
    `
  <caption>All of the tasks that are currently due</caption>
  <thead><tr><th>Name</th><th>Group</th><th>Category</th><th>Frequency</th></tr></thead>
  <tbody></tbody>
  <tfooter></tfooter>
  `,
    main
  );
  controller()
    .getAllTasks()
    .forEach((task) => {
      const taskRow = createEle(
        "tr",
        task.name,
        document.querySelector("tbody")
      );
      createEle("td", task.group, taskRow);
      createEle("td", task.category, taskRow);
      createEle("td", task.frequency, taskRow);
    });
};

export default init;
