export default (actionMap, defaultReturn) =>
    (state, action) =>
        (actionMap[action.type] || ( d => () => (defaultReturn || d)))
            (Object.assign({}, state))
                (action.payload);
