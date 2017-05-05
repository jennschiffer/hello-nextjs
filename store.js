import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

// INIT STATE
// eventually this will have more so navigation works really cool :D
const exampleInitialState = {
  chapterContent: null
}

// ACTION TYPES
export const actionTypes = {
  LOAD_CHAPTER: 'LOAD_CHAPTER',
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CHAPTER:
      // load chapter content
      axios.get('./book/chapters/' + action.chapter + '.md')
        .then(function (response) {
          console.log(response)
          return Object.assign({}, state, { response })
        })
        .catch(function (error) {
          console.log(error);
          return error
        })
    default: return state
  }
}

// ACTIONS
export const loadChapter = (chapter) => dispatch => {
  return dispatch({ type: 'LOAD_CHAPTER', chapter})
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}
