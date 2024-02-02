import app from "../app.js";
import renderAsideGroups from "./renderAside/renderAsideGroups.js";
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
    this.renderNavbar();
    this.renderContent();
    this.renderGroups();
    this.renderTasks();
    this.renderFooter();
    return this;
  }
  updateView() {
    this.renderNavbar();
    this.renderContent();
    this.renderGroups();
    this.renderFooter();
    return this;
  }



  renderAsideCategory(category, group) {
    app.view.createView(
      "li",
      category,
      document.getElementById(`sidebar_${kebabCase(group)}`)
    );
  }
  // method to generate static html as found within Emmets html file
  renderNavbar() {
    const today = new Date();
    const formattedDate = `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`;
    return this.createView(
      "nav",
      `
      <div class="navbar-top">
          <i class="fa-solid fa-bars menu-btn fa-2x" id="menu-btn"></i>
          <div id="date" class="date">Today: ${formattedDate}</div>
          <div class="btn-undo">
            <button class="btn undo">
              <img src="./img/ci_undo.svg" alt="undo button" />
              undo
            </button>
            <button class="btn undo">
              <img src="./img/ci_redo.svg" alt="redo button" />
              undo
            </button>
            <a href="#" class="btn btn-save">Save</a>
          </div>
        </div>
        <div class="navbtn">
          <a href="#" class="btn-day">Today</a>
          <a href="#" class="btn-month">Month</a>
          <a href="#" class="btn-year">Year</a>
        </div>`,
      document.getElementById("app"),
      "navbar",
      "navbar"
    );
  }
  // generates the content element currently a static representation
  renderContent() {
    return this.createView(
      "content",
      `<div class="content-search">
        <div class="priority">
            <a href="#" class="btn btn-lite btn-blue">Low</a>
            <a href="#" class="btn btn-lite btn-orange">Med</a>
            <a href="#" class="btn btn-lite btn-red">High</a>
            <div class="search">
                <input type="text" placeholder="">
                <i class="fa-solid fa-magnifying-glass fa-lg search-icon"></i>
            </div>
        </div>               
    </div>

    </div>
    
`,
      app.view.element,
      "content",
      "content"
    );
  }
  renderGroup(group) {
    return this.createView(
      "div",
      `
          <h2 class="category-name">${group}</h2>
          `,
      document.getElementById("content"),
      `content_${kebabCase(group)}`,
      "content-activity"
    );
  }
  renderCategory(group, category) {
    const id = `content_${kebabCase(group)}`;
    this.createView(
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
      document.getElementById(id),
      `category_${kebabCase(category)}`
    );
  }
  renderTask(task) {
    const anchor = document.querySelector(
      `#category_${kebabCase(task.category)} .content-description`
    );
    this.createView("p", task.name, anchor);
    this.createView(
      "div",
      `
    <img src="./img/mynaui_pencil.svg" alt="edit pencil image" class="icon-edit">
    <img src="./img/ph_trash.svg" alt="delect trash can image" class="icon-edit">
    `,
      anchor,
      "content-description-edit"
    );
  }
  renderTasks() {
    app.controller.readAllTasks().map((task) => this.renderTask(task));
  }
  renderGroups() {
    app.controller.returnUniqueGroupNames().map((group) => {
      this.renderGroup(group);
      app.controller.returnUniqueCategoriesByGroup(group).map((category) => {
        this.renderCategory(group, category);
      });
    });
  }
  renderFooter() {
    return this.createView(
      "footer",
      `
      <div class="footer-left">
        <a href="https://github.com/chingu-voyages/v47-tier1-team-04">
          <p class="copyright">© Chingu Team 04 Github</p>
        </a>
      </div>
      
      <a href="https://www.chingu.io" class="footer-right">          
          <p class="copyright">Chingu</p>
          <img class="chingu-logo" src="./img/chingo-logo.png">
      </a>            
    `,
      app.view.element
    );
  }
}
