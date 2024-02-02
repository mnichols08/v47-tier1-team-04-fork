import app from "../../app.js";
const renderAside = (title) =>
  app.view.createView(
    "aside",
    `<div class="avatar-area">
          <div class="avatar">
            <img
              src="./img/Friendly Ones Avatar and Backdrop.png"
              alt="avatar pict"
            />
          </div>
          <div class="gear-icon">
            <img src="./img/solar_settings-linear.svg" alt="gear icon" />
          </div>
        </div>
        <h2>${title}</h2>
        <div id="daily-checklist">
        </div>
        </div>`,
    app.view.element,
    "aside-el",
    "aside"
  );
   // after rendering some mostly static html, it calls the returnUniqueGroupNames function and then loops over those values to create additional views for each `group`
  export default renderAside;