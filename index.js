const anonReducer = (actionMap, initialReturn = null) =>
    (state, action) =>
        (actionMap[action.type] || ( d => () => d))
            (state !== undefined ? (state === Object(state) && !Array.isArray(state) ? Object.assign({}, state) : state) : initialReturn)
                (action.payload);

export const anonReducersFromInitialState = (actionMaps, initialState) =>
    Object.assign({}, ...Object.keys(initialState)
        .map(k => ({[k]: anonReducer(actionMaps[k], initialState[k])})));

export default anonReducer;
