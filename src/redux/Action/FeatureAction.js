import {
  FETCH_FEATURE_REQUEST, 
  FETCH_FEATURE_SUCCESS, 
  FETCH_FEATURE_FAIL,
} from "./type";
import axios from "axios";
import { API_ENDPOINT } from '../../axios-config';
    
    
/**
* This Request is used in Feature Component
* The function returns the company's features which consist of
    id, icon, title and description 
**/
export function fetchFeatures() {

  return (dispatch) => {
    let uri = `${API_ENDPOINT}/Feature`;
    dispatch({ type: FETCH_FEATURE_REQUEST });
    axios.get(uri)
    .then(response => {
    dispatch({ type: FETCH_FEATURE_SUCCESS, payload: response.data.data });

    }).catch(error => {
        dispatch({type: FETCH_FEATURE_FAIL, payload: error.message})
    })
  }

}