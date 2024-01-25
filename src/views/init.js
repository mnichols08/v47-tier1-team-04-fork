import clearMain, { main } from "../utils/docVars.js";
import createEle from "../utils/createEle";
import controller from "../controls/index.controller.js";

const init = () => {
  // run the clear function
  clearMain();
  // create a section element, fill in the section element with the HTML from index.html and append the section element to the anchor container
  const tasks = createEle("ul", `<h1>All Tasks</h1>`, main);
  tasks.class = "flex";
  controller()
    .getAllTasks()
    .forEach((task) => createEle("li", task.name, tasks));
};

export default init;
