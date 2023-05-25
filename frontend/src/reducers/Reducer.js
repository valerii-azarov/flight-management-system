import {
  FETCH_FLIGHTS_SUCCESS,
  FETCH_FLIGHT_SUCCESS,
  CREATE_FLIGHT_SUCCESS,
  UPDATE_FLIGHT_SUCCESS,
  DELETE_FLIGHTS_SUCCESS,
  FETCH_DATABASES_SUCCESS,
  FETCH_COLLECTIONS_SUCCESS,
} from "../actions/Actions";

const initialState = {
  flights: null,
  flight: null,
  databases: null,
  collections: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHTS_SUCCESS:
      return {
        ...state,
        flights: action.payload,
      };
    case FETCH_FLIGHT_SUCCESS:
      return {
        ...state,
        flight: action.payload,
      };
    case CREATE_FLIGHT_SUCCESS:
      return {
        ...state,
        flights: [...state.flights, action.payload],
      };
    case UPDATE_FLIGHT_SUCCESS:
      return {
        ...state,
        flights: state.flights.map((flight) => flight._id === action.payload._id ? action.payload : flight),
      };
    case DELETE_FLIGHTS_SUCCESS:
      return {
        ...state,
        flights: state.flights.filter((flight) => flight._id !== action.payload),
      };
    case FETCH_DATABASES_SUCCESS:
      return {
        ...state,
        databases: action.payload,
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
