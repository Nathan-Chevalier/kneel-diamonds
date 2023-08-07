const transientState = {
  id: 0,
  styleId: 0,
  sizeId: 0,
  metalId: 0,
  timestamp: 0,
};

export const setStyle = (chosenStyle) => {
  transientState.styleId = chosenStyle;
  console.log(transientState);
};

export const setSize = (chosenSize) => {
  transientState.sizeId = chosenSize;
  console.log(transientState);
};

export const setMetal = (chosenMetal) => {
  transientState.metalId = chosenMetal;
  console.log(transientState);
};
