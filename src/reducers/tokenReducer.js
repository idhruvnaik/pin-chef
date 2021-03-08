import * as initialState from './intialStates';

export default (state, action) => {
    if (state === undefined) {
        state = initialState.token
    } 
    switch (action.type) {
        case "add":
            return {
                added: action.payload
            };
        case "donotadd":
            return {
                added: action.payload
            };
        default:
            return state;
    }
};