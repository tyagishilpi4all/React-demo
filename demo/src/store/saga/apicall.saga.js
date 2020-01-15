import { put } from "redux-saga/effects";

import axios from "../api.interface";
import { ApiCallSuccess } from "../actions/index.action";

export function* onApiCall(data) {
    let values = data;
    try {
        // const data = yield axios.post("/addData", values);
        yield put(ApiCallSuccess(values));
    } catch (error) {
        throw error;
    }
}