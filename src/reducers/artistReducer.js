//import * as types from '../actions/actionTypes';


export default function artistReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_CITY_SUCCESS':
      return action.cities;

  

    default:
      return state;
  }
}
