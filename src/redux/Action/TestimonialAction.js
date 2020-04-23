import {
  FETCH_TESTIMONIAL_REQUEST, 
  FETCH_TESTIMONIAL_SUCCESS, 
  FETCH_TESTIMONIAL_FAIL,
} from "./type";
import axios from "axios";
import { API_ENDPOINT } from '../../axios-config';
  
  
/**
* This Request is used in Testimonial Component
* The function returns reviews data which consists of
    id, user_name, user_image, title and description 
**/
export function fetchTestimonials() {

  return (dispatch) => {
    let uri = `${API_ENDPOINT}/testimonials`;
    dispatch({ type: FETCH_TESTIMONIAL_REQUEST });
    axios.get(uri)
    .then(response => {
    dispatch({ type: FETCH_TESTIMONIAL_SUCCESS, payload: response.data.data });

    }).catch(error => {
        if(error.response){
            dispatch({type: FETCH_TESTIMONIAL_FAIL, payload: error.response.data.message})
        }else{
            dispatch({type: FETCH_TESTIMONIAL_FAIL, payload: error.message})
        }
    })
  }

}