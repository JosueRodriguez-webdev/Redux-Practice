import React, {useEffect} from 'react'

import {PlayerCard} from './PlayerCard'

import {connect} from 'react-redux'

import {getPlayer} from '../actions'

function PlayerList(props) {

    useEffect(() => {
        props.getPlayer();
    },[])

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
}, { getPlayer })(PlayerList);