/*
Dictionnaire des actions
*/

// action types
export const CHANGE_GRID_SIZE = "CHANGE_GRID_SIZE";

// action creator

/**
 *
 * @param {Object} newValue
 * @returns
 */
export function actionChangeGridSize(newValue) {
  return {
    type: CHANGE_GRID_SIZE,
    payload: newValue,
  };
}
