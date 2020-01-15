import { API_CAll_SUCCESS } from "../actionType";

const initState = null;

const reducers = (state = initState, { type, values, error }) => {
    switch (type) {
        case API_CAll_SUCCESS:
            return values;
        default:
            return state;
    }
};

export default reducers;