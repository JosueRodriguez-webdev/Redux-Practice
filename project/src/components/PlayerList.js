import React from 'react'

import {PlayerCard} from './PlayerCard'

import {connect} from 'react-redux'

function PlayerList(props) {
    return (
        <div>
            <h1>Hello World!</h1>
            <PlayerCard/>
        </div>
    )
}

export default connect(state=>{
    return{
        players: state.players,
        isFetching: state.isFetching,
        errors: state.errors
    }
}, {})(PlayerList);