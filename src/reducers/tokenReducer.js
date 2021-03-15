const manageToken = (state = {}, action) => {
    switch (action.type) {
        case "ADD_TOKEN":
            return state = {
              "token": action.payload
            }
        case "REMOVE_TOKEN":
            return state = {};
        default:
            return state;
    }
};

export default manageToken;