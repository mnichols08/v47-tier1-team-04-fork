import app from "../../app.js";
// generates the content element currently a static representation
const renderContent = () =>
  app.view.createView(
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
export default renderContent;
