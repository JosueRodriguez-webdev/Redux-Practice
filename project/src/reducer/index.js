// setup initialState

const initialState = {
    players: [],
    isFetching: false,
    errors: ''
}

// setup an empty reducer
export const playerReducer = (state = initialState, action) => {

    //setup switch ,cases, and default
    switch(action.type){
        default:
            return state
    }
}