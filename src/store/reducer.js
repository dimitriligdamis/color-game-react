import { CHANGE_GRID_SIZE } from "../actions";

const initialState = {
  gridNumber: 8,
  pixelNumber: 25,
  defaultBgColor: "rgb(208, 217, 225)",
  defaultBorderColor: "rgb(128, 142, 155)",
  bgColor: "rgb(72 84 96)",
  borderColor: "rgb(30 39 46)",
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_GRID_SIZE:
      return {
        ...state,
        gridNumber: Number(action.payload.gridNumber),
        pixelNumber: Number(action.payload.pixelNumber),
      };
    default:
      return state;
  }
}

export default reducer;
