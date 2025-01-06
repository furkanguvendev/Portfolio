import axios from "axios";
import { Dispatch } from "redux";

export const LANGUAGE = "LANGUAGE";
export const MODE = "MODE";
export const TURKISH = "TURKISH";
export const ENGLISH = "ENGLISH";

export type ActionTypes =
  | { type: typeof LANGUAGE; payload: string }
  | { type: typeof MODE; payload: boolean }
  | { type: typeof TURKISH; payload: object }
  | { type: typeof ENGLISH; payload: object };

export const language = (dil: string) => {
    return { type: LANGUAGE, payload: dil };
};

export const mode = (mod: boolean) => {
    return { type: MODE, payload: mod };
};

export const turkish = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        try {
            const res = await axios.get("https://66911f2526c2a69f6e8e890d.mockapi.io/data/myData/portfolio");
            dispatch({ type: TURKISH, payload: res.data.turkish });
        } catch (error) {
            console.error("Turkish data fetch error:", error);
        }
    };
};

export const english = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        try {
            const res = await axios.get("https://66911f2526c2a69f6e8e890d.mockapi.io/data/myData/portfolio");
            dispatch({ type: ENGLISH, payload: res.data.english });
        } catch (error) {
            console.error("English data fetch error:", error);
        }
    };
};
