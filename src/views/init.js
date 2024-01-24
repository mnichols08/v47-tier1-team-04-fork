import clearMain, { main } from "../utils/docVars.js";
import createEle from "../utils/createEle";
import controller from "../controls/index.controller.js";


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
  <section class="display-properties">
	
		<h2>Block Elements ( div )</h2>
	
    <div class="block">
						<div class="box">1</div>
						<div class="box">2</div>
						<div class="box">3</div>
						<div class="box">4</div>
    </div>
	
		<h2>Inline Block Elements ('div.inline-block')</h2>
	
    <div class="inline-block">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
				<div class="box">6</div>
				<div class="box">7</div>
				<div class="box">8</div>
				<div class="box">9</div>
				<div class="box">10</div>
				<div class="box">11</div>
        <div class="box">12</div>
        <div class="box">13</div>
        <div class="box">14</div>
        <div class="box">15</div>
				<div class="box">16</div>
				<div class="box">17</div>
				<div class="box">18</div>
				<div class="box">19</div>
				<div class="box">20</div>
			  <div class="box">21</div>
    </div>
	
		<h2>Row-Reverse Flex Elements ('div.flex-reverse')</h2>
	
    <div class="flex-reverse">
						<div class="box">1</div>
						<div class="box">2</div>
						<div class="box">3</div>
						<div class="box">4</div>
						<div class="box">5</div>
						<div class="box">6</div>
						<div class="box">7</div>
						<div class="box">8</div>
						<div class="box">9</div>
						<div class="box">10</div>
    </div>
	
	<h2>Flex Elements ('div.flex')</h2>
	
    <div class="flex">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
				<div class="box">6</div>
				<div class="box">7</div>
				<div class="box">8</div>
				<div class="box">9</div>
				<div class="box">10</div>				
    </div>
	
	<h2>Two Column Flex Items ('div.flex-two-col')</h2>
	
    <div class="flex-two-col m-1">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
    </div>
	
		<h2>Three Column Flex Items ('div.flex-three-col')</h2>
	
	   <div class="flex-three-col">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
			 	<div class="box">6</div>
    </div>
	
		<h2>Four Column Flex Items ('div.flex-four-col')</h2>
	
		   <div class="flex-four-col">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
				<div class="box">6</div>
				<div class="box">7</div>
				<div class="box">8</div>
    </div>
	
			<h2>Five Column Flex Items ('div.flex-five-col')</h2>
		   <div class="flex-five-col">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
				<div class="box">6</div>
				<div class="box">7</div>
				<div class="box">8</div>
				<div class="box">9</div>
				<div class="box">10</div>
    </div>
	
</section>
    `,
    main
  );
};

export default init;
