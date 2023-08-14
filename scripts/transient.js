let transientState = {
  styleId: 0,
  sizeId: 0,
  metalId: 0,
  typeId: 0,
};

export const setStyle = (chosenStyle) => {
  transientState.styleId = chosenStyle;
};

export const setSize = (chosenSize) => {
  transientState.sizeId = chosenSize;
};

export const setMetal = (chosenMetal) => {
  transientState.metalId = chosenMetal;
};

export const setType = (chosenType) => {
  transientState.typeId = chosenType;
};

export const saveOrder = async () => {
  if (
    transientState.styleId === 0 ||
    transientState.sizeId === 0 ||
    transientState.metalId === 0 ||
    transientState.typeId === 0
  ) {
    window.alert("Please fill out your order!");
  } else {
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transientState),
    };

    const response = await fetch("http://localhost:8088/orders", postOptions);

    const saveEvent = new CustomEvent("orderSaved");
    document.dispatchEvent(saveEvent);

    transientState = {
      styleId: 0,
      sizeId: 0,
      metalId: 0,
      typeId: 0,
    };
  }
};
