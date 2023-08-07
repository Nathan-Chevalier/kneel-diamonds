import { setMetal } from "./transient.js";

export const getMetals = async () => {
  document.addEventListener("change", metalChange);
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let html = `<h2> Which type of metal would you like?</h2>`;

  const metalArray = metals.map((metal) => {
    return `<div>
                <input type="radio" name="metal" value="${metal.id}" />
                ${metal.metal}
                </div>`;
  });

  html += metalArray.join("");

  return html;
};

const metalChange = (changeEvent) => {
  if (changeEvent.target.name === "metal") {
    const converted = parseInt(changeEvent.target.value);
    setMetal(converted);
  }
};
