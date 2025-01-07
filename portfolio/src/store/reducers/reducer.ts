import { ActionTypes, MYINFO, LANGUAGE, DataState } from "../actions/action";

const initialLanguage: keyof DataState =
  (localStorage.getItem("language") as keyof DataState) || "english";

const initialState = {
  language: initialLanguage,
  data: { turkish: null, english: null } as DataState,
  myData: null as object | null,
};

export const reducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case LANGUAGE:
      localStorage.setItem("language", action.payload);
      return {
        ...state,
        language: action.payload,
        myData: state.data[action.payload],
      };
    case MYINFO:
      return {
        ...state,
        data: action.payload,
        myData: action.payload[state.language],
      };
    default:
      return state;
  }
};
