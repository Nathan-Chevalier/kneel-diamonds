import { setSize } from "./transient.js";

export const getSizes = async () => {
  document.addEventListener("change", sizeChange);
  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  let html = `<h2> Which size would you like? </h2>`;

  const divStringArray = sizes.map((size) => {
    return `<div>
        <input type="radio" name="size" value="${size.id}" />
        ${size.carets} carats
        </div>`;
  });

  html += divStringArray.join("");

  return html;
};

const sizeChange = (changeEvent) => {
  if (changeEvent.target.name === "size") {
    const converted = parseInt(changeEvent.target.value);
    setSize(converted);
  }
};
