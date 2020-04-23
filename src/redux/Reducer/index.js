import { combineReducers } from "redux";
import FeatureReducer from './FeatureReducer';
import TestimonialReducer from './TestimonialReducer';

export default combineReducers({
    feature     : FeatureReducer,
    testimonial : TestimonialReducer,
});