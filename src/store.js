import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';



const enchancers = compose(
   window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, enchancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
