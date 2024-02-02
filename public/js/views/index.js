import app from "../app.js";
import renderAsideGroups from "./renderAside/renderAsideGroups.js";
import renderNavbar from "./renderNavbar.js";
import renderContent from "./content/renderContent.js";
import renderGroups from "./content/renderGroups.js";
import renderTasks from "./content/renderTasks.js"
import renderFooter from "./renderFooter.js"
import { kebabCase } from "../utils/utils.js";
let i = 1; // sets view index to 1;
// declares a constructor class for creating new Views within the document (primarily use the method createView for this)
export default class View {
  // ele - the type of element to create whether it be a `main`, `div`, etc.
  // content - the innerHTML of the element being created
  // anchor - what is this element going to be appended to?
  // id - (optional) assign an id to the element)
  // classList - (optional) pass in a classList to the element being created
  constructor(ele, content, anchor, id, classList) {
    const element = document.createElement(ele);
    element.innerHTML = content;
    if (id) {
      element.id = id;
      this.id = id;
    } else {
      element.id = `view_${i}`;
      this.id = element.id;
      i++;
    }
    if (classList) element.classList = classList;
    anchor.append(element);
    this.element = element;
    return this;
  }
  // method to call itself and populate the Model's `views` array with the new element
  createView(ele, content, anchor, id, classList) {
    const newView = new View(ele, content, anchor, id, classList);
    app.views.push(newView);
    return this;
  }
  // collection of functions to initialize the view of the application
  init(title) {
    renderAsideGroups(title);
    renderNavbar();
    renderContent();
    renderGroups();
    renderTasks();
    renderFooter();
    return this;
  }
  updateView(title) {
    renderAsideGroups(title);
    renderNavbar();
    renderContent();
    renderGroups();
    renderTasks();
    renderFooter();
    return this;
  }




}
