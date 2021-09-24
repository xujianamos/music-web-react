/*
 * @Author: xujian
 * @Date: 2021-09-24 22:52:07
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-24 23:12:09
 * @Description:store出口
 * @FilePath: /music-web-react/src/store/index.js
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;

