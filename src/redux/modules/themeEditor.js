import { saveThemeData } from "../../api/themeEditor";
import { fieldDefaultValues } from "../../views/ThemeEditor/menuConfig";

const SET_FIELD_VALUE = "themeEditor/SET_FIELD_VALUE";
const SET_IS_SAVE_IN_PROGRESS = "themeEditor/SET_IS_SAVE_IN_PROGRESS";
const RESET = "themeEditor/RESET";

const initialState = { ...fieldDefaultValues, isSaveInProgress: false };

export function setFieldValue({ name = "", value = "" }) {
  return { type: SET_FIELD_VALUE, name, value };
}

export function saveThemeValues() {
  return async (dispatch, getState) => {
    const { themeEditor } = getState();
    dispatch({ type: SET_IS_SAVE_IN_PROGRESS, isSaveInProgress: true });
    try {
      await saveThemeData(themeEditor);
    } catch (error) {
      // todo handle error
    }
    dispatch({ type: SET_IS_SAVE_IN_PROGRESS, isSaveInProgress: false });
  };
}

export function undoAll() {
  return { type: RESET };
}

const getReducer = {
  [SET_FIELD_VALUE]: ({ state, action: { name, value } }) => ({
    ...state,
    [name]: value,
  }),
  [RESET]: ({ state }) => ({ ...state, ...fieldDefaultValues }),
};

function reducer(state = initialState, action) {
  const { type } = action;
  const doAction = getReducer[type];
  return doAction ? doAction({ state, action }) : state;
}

export default reducer;
