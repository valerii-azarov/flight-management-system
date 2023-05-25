import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/Reducer";

const rootReducer = combineReducers({
  flights: reducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
