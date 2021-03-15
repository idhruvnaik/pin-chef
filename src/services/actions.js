// export const addToken = content => ({
//     type: "ADD_TOKEN",
//     payload: {
//         "username": content.name,
//         "token": content.token
//     }
// });


export const addToken = (token_details) => {
    return {
      type: "ADD_TOKEN",
      payload: token_details
    }
};
  
export const removeToken = () => {
    return {
      type: "REMOVE_TOKEN"
    }
};

export const signIn = () => {
    return {
        type: "SIGN_IN"
    }
}