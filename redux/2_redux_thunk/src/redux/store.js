import { createStore, combineReducers, applyMiddleware } from 'redux';
import productReducer from './reducers/productReducer';
import restaurantReducer from './reducers/restaurantReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  product: productReducer,
  restaurant: restaurantReducer,
});

// applyMiddleware herhangi bir arayazılımı reduc'a dahil etmeye yarar. Biz burda thunk arayzılımını dahil etmek için kullandık. Artık thunk'ın asenkron aksiyonlarını yazabilecez.
export default createStore(rootReducer, applyMiddleware(thunk));
