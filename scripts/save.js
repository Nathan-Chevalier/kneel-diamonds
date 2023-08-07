import { saveOrder } from "./transient.js";

const saveButtonClick = (clickEvent) => {
  if (clickEvent.target.id === "save") {
    saveOrder();
  }
};

export const save = () => {
  document.addEventListener("click", saveButtonClick);
  return `<button id="save"> Submit Order</button>`;
};
