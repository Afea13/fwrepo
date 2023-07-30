import {LEVELS_LIST} from "./common/constants"

export const initialState = { 
  levels:0,
  levelGap:0,
  totalLevels:LEVELS_LIST,
  screenWidth:0,
  screenHeight: 0,
  no:2,
  count: 0 
  
};

const reducer = (state, action) => {
 
    switch (action.type) {
      case "SET_LEVELS_AND_GAPS":
        return {
          ...state,
          levels:action.levels,
          levelGap:action.levelGap,

        }
      
      case "SET_DIMENSIONS":
        return {
          ...state,
          screenWidth: action.screenWidth,
          screenHeight:action.screenHeight,
          no:action.no,
          count: action.count + 1 
        };


        default:
            return state;
        }
      };
      
export default reducer;