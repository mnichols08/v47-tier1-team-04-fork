import clearMain, { main } from "../utils/docVars.js";
import createEle from "../utils/createEle";
import controller from "../controller/index.js";


const init = () => {
  // run the clear function
  clearMain();
  controller();
  // create a section element, fill in the section element with the HTML from index.html and append the section element to the anchor container
  const section = createEle(
    "section",
    `
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <hr />
    <p>A Paragraph <span>and a span</span> within one.</p>
    <p><b>bold text</b></p>
    <p><i>This text is italic</i></p>
    <p>A <a href="#">link</a> within a paragraph</p>
    <p>This is<sub> subscript</sub> and <sup>superscript</sup></p>
    <blockquote cite="http://www.worldwildlife.org/who/index.html">
      For 60 years, WWF has worked to help people and nature thrive. As the
      world's leading conservation organization, WWF works in nearly 100
      countries. At every level, we collaborate with people around the world
      to develop and deliver innovative solutions that protect communities,
      wildlife, and the places in which they live.
    </blockquote>
  </main>

  <table>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>Roland Mendel</td>
      <td>Austria</td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>Helen Bennett</td>
      <td>UK</td>
    </tr>
    <tr>
      <td>Laughing Bacchus Winecellars</td>
      <td>Yoshi Tannamuri</td>
      <td>Canada</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
  </table>
    `,
    main
  );

};

export default init;