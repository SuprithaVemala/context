import React from 'react'

import withComponent from './HOC'

function Display(props) {
    return (
        <div>
            <p>Text typed in input field is <span style={{color:"blue",fontSize:"1.5rem"}}>{props.inputText}</span></p>
        </div>
    )
}

export default withComponent(Display)
