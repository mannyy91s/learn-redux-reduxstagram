import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, compse } from 'redux';
import { browserHistory } from 'react-router';

//import root reducer
import { rootReducer } from './reducers/index';
import comments from './data/comments';
import post from './data/post';

const defaultState = {
    posts,
    comments
};
export const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
