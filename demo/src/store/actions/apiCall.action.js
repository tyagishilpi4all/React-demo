import { API_CAll,API_CAll_SUCCESS } from "../actionType";

export const ApiCall = values => (
  alert(values)
,    {
    type: API_CAll,
    values
});
export const ApiCallSuccess = values => ({
    type: API_CAll_SUCCESS,
    values
})