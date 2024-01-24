/* as recommend, anchored everything to the <main>, so if we declare the variable it no longer matters it is just defined */
export const header = document.querySelector("header");
export const main = document.querySelector("main");
export const footer = document.querySelector("footer");

/* Function to empty the content of the header element */
export const clearHeader = () => (header.innerHTML = "");

/* Function to empty the content of the main element */
const clearMain = () => (main.innerHTML = "");

/* Function to empty the content of the footer element */
export const clearFooter = () => (footer.innerHTML = "");

export const clearEle = (ele) => (ele.innerHTML = "");

export default clearMain;
