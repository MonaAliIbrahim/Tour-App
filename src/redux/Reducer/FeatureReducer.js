import * as type from "../Action/type";

const initialState = {
  features:[
    // {id:1, icon:'globe', title:'Explore the world', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    // {id:2, icon:'heart', title:'Explore the world', description:'Lorem ipsum dolor consectetur. Aperiam, sapiente aspernatur.'},
    // {id:3, icon:'compass', title:'Live a healthier life', description:'Lorem ipsum sit amet consectetur adipisicing elit.'},
    // {id:4, icon:'map', title:'Meet nature', description:'Lorem ipsum dolor consectetur adipisicing elit. Aperiam, sapiente aspernatur'},
  ],
  error: null
}

const FeatureReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_FEATURE_REQUEST:
      return { ...state };
    case type.FETCH_FEATURE_SUCCESS:
      return {
        ...state,
        features: [...action.payload],
      };
    case type.FETCH_FEATURE_FAIL:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}

export default FeatureReducer;