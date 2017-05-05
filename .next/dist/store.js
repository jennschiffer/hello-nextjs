'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.loadChapter = exports.reducer = exports.actionTypes = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// INIT STATE
// eventually this will have more so navigation works really cool :D
var exampleInitialState = {
  chapterContent: null
};

// ACTION TYPES
var actionTypes = exports.actionTypes = {
  LOAD_CHAPTER: 'LOAD_CHAPTER'
};

// REDUCERS
var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.LOAD_CHAPTER:
      // load chapter content
      return 'wow';
    default:
      return state;
  }
};

// ACTIONS
var loadChapter = exports.loadChapter = function loadChapter(chapter) {
  return function (dispatch) {
    return dispatch({ type: 'LOAD_CHAPTER', chapter: chapter });
  };
};

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;

  return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};