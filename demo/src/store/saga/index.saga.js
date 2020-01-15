import { takeLatest, all } from "redux-saga/effects";
import {
    API_CAll
} from "../actionType";
import { onApiCall } from "./apicall.saga";

function* sagas() {
    yield all([takeLatest(API_CAll, onApiCall)]);
    
}

export default sagas;