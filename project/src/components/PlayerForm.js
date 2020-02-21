import React, {useState} from 'react'

import {connect} from 'react-redux'
import {postPlayer} from '../actions'

 function PlayerForm(props) {
     const [player, setPlayer] = useState({
         name: '',
         rank: '',
         nickname: ''
     })

    const inputHandler = e=> {
        setPlayer({[e.target.name]: e.target.value})
    }

    const submitHandler =e =>{
        e.preventDefault()
        props.postPlayer(player)
    }

    return (
        <div>
            <form id='playerForm' onSubmit={submitHandler}>
                <label htmlFor='name'>Name</label>
                    <input name='name' placeHolder = 'John' onChange={inputHandler} value={props.name}/>
            </form>

            <form id='playerForm'>
                <label htmlFor='rank'>Name</label>
                    <input name='rank' placeHolder = '#1' onChange={inputHandler} value={props.rank}/>
            </form>

            <form id='playerForm'>
                <label htmlFor='nickname'>Name</label>
                    <input name='nickname' placeHolder = 'lil john' onChange={inputHandler} value={props.nickname}/>

                    <button type='submit' className='btn'>Submit</button>
            </form>
            
        </div>
    )
}

export default connect(state=>{
    return{
       players: state.players,
       errors: state.errors 
    }
},{postPlayer})(PlayerForm)