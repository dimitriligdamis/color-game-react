/*
Dictionnaire des actions
*/

// action types
export const CHANGE_GRID_SIZE = "CHANGE_GRID_SIZE";
export const CHANGE_COLOR = "CHANGE_COLOR";

// action creator

export function actionChangeGridSize(newValue) {
  return {
    type: CHANGE_GRID_SIZE,
    payload: newValue,
  };
}

export function actionChangeColor(newValue) {
  return {
    type: CHANGE_COLOR,
    payload: newValue,
  };
}
