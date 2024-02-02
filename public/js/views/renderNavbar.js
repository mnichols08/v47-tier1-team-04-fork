import app from "../app.js";
// method to generate static html as found within Emmets html file
const renderNavbar = () =>
  app.view.createView(
    "nav",
    `
      <div class="navbar-top">
          <i class="fa-solid fa-bars menu-btn fa-2x" id="menu-btn"></i>
          <div id="date" class="date">Today: ${
            new Date().getMonth() + 1
          }/${new Date().getDate()}/${new Date().getFullYear()}</div>
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

export default renderNavbar;
