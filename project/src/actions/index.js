import axios from 'axios'

export const POST_PLAYER = 'POST_PLAYER'
export const POST_PLAYER_FAIL = 'POST_PLAYER_FAIL'
export const SUCCESS_POST_PLAYER = 'SUCCESS_POST_PLAYER'

export const GET_PLAYER = 'GET_PLAYER'
export const GET_PLAYER_FAIL = 'GET_PLAYER_FAIL'
export const SUCCESS_GET_PLAYER = 'SUCCESS_GET_PLAYER'

export const postPlayer= () => dispatch => {
    dispatch({type: POST_PLAYER})

    axios.post(`http://localhost:8888/players`)
    .then((res)=> {
        console.log(res)
        dispatch({type: SUCCESS_POST_PLAYER, payload: res.data})
    })
    .catch((err) => {
        console.log(err)
        dispatch({type: POST_PLAYER_FAIL, payload: err})
    })
}

export const getPlayer = () => dispatch => {
    dispatch({type: GET_PLAYER})

    axios.get(`http://localhost:8888/players`)
    .then((res)=> {
        console.log(res)
        dispatch({type: SUCCESS_GET_PLAYER, payload: res.data})
    })
    .catch((err) => {
        console.log(err)
        dispatch({type: GET_PLAYER_FAIL, payload: err})
    })
}