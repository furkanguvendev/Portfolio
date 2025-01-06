import {ActionTypes, TURKISH, ENGLISH, MODE, LANGUAGE} from "../actions/action.ts";

const initialLanguage = localStorage.getItem("language") || "english";

const initialState = {
    language: initialLanguage,
    darkMode: false,
    myData: null as object | null,
}

export const reducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case LANGUAGE:
            return {...state, language: action.payload};
        case MODE:
            return {...state, darkMode: action.payload};
        case TURKISH:
            localStorage.setItem("language", "turkish");
            return {
                ...state,
                language: "turkish",
                myData:action.payload,
            };
        case ENGLISH:
            localStorage.setItem("language", "english");
            return {
                ...state,
                language: "english",
                myData:action.payload,
            }
    }
}