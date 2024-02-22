import app from "../app.js";
import renderSettings from "./modals/renderSettings.js";

// Template for the avatar section
const avatarTemplate = () => `
  <div class="avatar-area">
    <div class="avatar">
      <img src="${
        (app.state.gitHubData && app.state.gitHubData.avatar_url) ||
        "./img/Friendly Ones Avatar and Backdrop.png"
      }" alt="avatar pict" class="avatar-pict">
    </div>
    <div class="gear-icon">
      <img src="./img/solar_settings-linear.svg" alt="gear icon" id="settings-icon">
    </div>
  </div>            
  <h2>${app.state.title || "Daily Tasks"}</h2>
  <div id="daily-checklist"></div>
`;

// Template for the group section
const groupTemplate = (group) => `
  <h3 id="sidebar_group_${app.controller.formatString(
    group
  )}">${group} <i class="fa-solid fa-circle-chevron-down"></i></h3>
  <ul id="sidebar_${app.controller.formatString(group)}"></ul>
`;

// Class for controlling the aside view
export default class AsideViewController {
  // Initialize the aside view with the given title
  init = (title) => {
    this.renderAsideGroups(title);
  };

  // Render the aside view with the given title
  renderAside = (title = "Daily Checklist") => {
    app.view.createElement(
      "aside",
      avatarTemplate(title),
      document.getElementById("app"),
      "aside-el",
      "aside"
    );
    document.getElementById("settings-icon").onclick = () => renderSettings();
    return `rendered the aside app.view with title ${title}`;
  };

  // Render the groups in the aside view
  renderAsideGroups = (title) => {
    this.renderAside(title);
    app.controller.returnUniqueGroupNames().forEach((group) => {
      this.renderAsideGroup(group);
      app.controller
        .returnUniqueCategoriesByGroup(group)
        .forEach((category) => this.renderAsideCategory(category, group));
    });
    return `rendered the unique categories by group in the aside app.view`;
  };

  // Update the aside view
  updateAside = () => {
    document.getElementById("aside-el").innerHTML = avatarTemplate();
    document.getElementById("settings-icon").onclick = () => renderSettings();
    app.controller.returnUniqueGroupNames().forEach((group) => {
      this.renderAsideGroup(group);
      app.controller
        .returnUniqueCategoriesByGroup(group)
        .forEach((category) => this.renderAsideCategory(category, group));
    });
  };

  // Render a group in the aside view
  renderAsideGroup = (group) => {
    app.view.createElement(
      "div",
      groupTemplate(group),
      document.getElementById("daily-checklist", null, "activity")
    );
  };
  addAsideGroupEventListeners = () => {
    document.querySelectorAll("#daily-checklist h3").forEach((ele) => {
      ele.onclick = (e) => {
        const icon = e.target.querySelector("i");
        icon.classList.toggle("fa-circle-chevron-down");
        icon.classList.toggle("fa-circle-chevron-left");
        e.target.nextElementSibling.classList.toggle("hide");
      };
    });
  };
  // Render a category in the aside view
  renderAsideCategory = (category, group) => {
    app.view.createElement(
      "li",
      category,
      document.getElementById(`sidebar_${app.controller.formatString(group)}`)
    );
    this.addAsideGroupEventListeners();
    return `rendered category ${category} in the aside app.view`;
  };
}
