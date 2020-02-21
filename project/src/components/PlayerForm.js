import React from 'react'

import {connect} from 'react-redux'

 function PlayerForm(props) {
    return (
        <div>
            PlayerForm
            
        </div>
    )
}

export default connect(state=>{
    return{
       players: state.players,
       errors: state.errors 
    }
},{})(PlayerForm)