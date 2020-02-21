import {
      POST_PLAYER,
  POST_PLAYER_FAIL,
  SUCCESS_POST_PLAYER,
  GET_PLAYER,
  GET_PLAYER_FAIL ,
  SUCCESS_GET_PLAYER
} from '../actions'

// setup initialState

const initialState = {
    players: [],
    isFetching: false,
    isPosting: false,
    errors: ''
}

// setup an empty reducer
export const playerReducer = (state = initialState, action) => {

    //setup switch ,cases, and default
    switch(action.type){
    case POST_PLAYER:
        return {
            ...state, isPosting: true
        }
    case POST_PLAYER_FAIL:
        return {
            ...state, isPosting: false, errors: action.payload
        }
    case SUCCESS_POST_PLAYER:
        return {
            ...state, isPosting: false, players: [action.payload]
        }
    case GET_PLAYER:
        return {
            ...state, isFetching: true
        }
    case GET_PLAYER_FAIL: 
    return {
        ...state, error: action.payload, isFetching: true
    }
    case SUCCESS_GET_PLAYER:
        return {
            ...state, players: [action.payload],
            isFetching: false,
        }
        default:
            return state
    }
}