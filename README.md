# redux-anon-reducer

A simple anonymous function reducer for use with redux

## Installation

`npm install --save-dev redux-anon-reducer`

## Usage

To use `redux-anon-reducer`, your actions must follow the [Flux Standard Action format](https://github.com/redux-utilities/flux-standard-action)

Create an actionMap, with keys of your action types corresponding to the relevant state updater (functions inside what is normally the reducer file)

```
import * as actiontypes from './actiontypes';
import * as stateupdaters from './stateupdaters';

const actionMap = {
    [actiontypes.LOAD_QUIZ]: stateupdaters.loadQuiz,
    [actiontypes.GENERATE_QUIZ]: stateupdaters.generateQuiz,
    [actiontypes.SET_ANSWER]: stateupdaters.setAnswer,
    [actiontypes.SUBMIT_ANSWERS]: stateupdaters.submitAnswers,
    [actiontypes.GET_LEADERBOARDS]: stateupdaters.getLeaderboards,
    [actiontypes.GET_VALIDQUIZCODES]: stateupdaters.getValidQuizCodes,
    [actiontypes.GET_VALIDQUIZOPTIONS]: stateupdaters.getValidQuizOptions
}
```

In your store.js, create the reducer

```
import anonReducer from 'redux-anon-reducer';
import actionmap from './actionmap';

const reducer = anonReducer(actionmap);
```

In the case of sliced reducers, you can pass in an initial return state.

```
import { combineReducers } from 'redux';
const initialReturn = ...
const singleReducer = anonReducer(actionmap, initialReturn);
const reducer = combineReducers({ singleReducer })
```

You can initialise this within combineReducers as such with an initial state for each.

```
const reducer = combineReducers(Object.assign({}, ...Object.keys(initialState)
    .map(k => ({[k]: anonReducer(actionmaps[k], initialState[k])}))))
``
