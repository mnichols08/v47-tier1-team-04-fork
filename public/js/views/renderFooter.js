import app from "../app.js";
const renderFooter = () => app.view.createView(
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
  
export default renderFooter