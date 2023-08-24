import { getTransient, setStyle } from "./transient.js";

export const getStyles = async () => {
  document.addEventListener("change", styleChange);
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  let html = `<h2> Which style would you like?</h2>`;

  const styleArray = styles.map((style) => {
    const transient = getTransient();
    return `<div>
                <input type="radio" name="style" value="${style.id}" ${
      transient.styleId === style.id ? "checked" : ""
    }/>
                ${style.style}
                </div>`;
  });

  html += styleArray.join("");
  return html;
};

const styleChange = (changeEvent) => {
  if (changeEvent.target.name === "style") {
    const converted = parseInt(changeEvent.target.value);
    setStyle(converted);
  }
};
