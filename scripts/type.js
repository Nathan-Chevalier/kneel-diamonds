import { getTransient, setType } from "./transient.js";

export const getTypes = async () => {
  document.addEventListener("change", typeChange);
  const response = await fetch("http://localhost:8088/types");
  const types = await response.json();

  let html = `<h2> What type of jewelry would you like made? </h2>`;

  const typeArray = types.map((type) => {
    const transient = getTransient();
    return `<input type="radio" name="type" value="${type.id}" ${
      transient.typeId === type.id ? "checked" : ""
    }/>
                ${type.type}`;
  });

  html += typeArray.join("");
  return html;
};

const typeChange = (changeEvent) => {
  if (changeEvent.target.name === "type") {
    const converted = parseInt(changeEvent.target.value);
    setType(converted);
  }
};
