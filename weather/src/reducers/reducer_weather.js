import  { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  // console.log('Action receive: ', action);
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]; // its the same as up
                                                // [city, city, city] NOT [city,[city, city] ]
  }
  return state;
}
