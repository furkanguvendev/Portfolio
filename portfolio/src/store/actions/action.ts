import axios from "axios";
import { Dispatch } from "redux";

export const LANGUAGE = "LANGUAGE";
export const MYINFO = "MYINFO";

export type DataState = {
  turkish: object | null;
  english: object | null;
};

export type ActionTypes =
  | { type: typeof LANGUAGE; payload: keyof DataState }
  | { type: typeof MYINFO; payload: DataState };

export const language = (dil: keyof DataState) => {
  return { type: LANGUAGE, payload: dil };
};

export const getData = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    try {
      const res = await axios.get(
        "https://66911f2526c2a69f6e8e890d.mockapi.io/data/myData/portfolio"
      );
      const data = {
        turkish: res.data[0].turkish,
        english: res.data[0].english,
      };
      dispatch({ type: MYINFO, payload: data });
    } catch (error) {
      console.error("Data fetch error:", error);
    }
  };
};
