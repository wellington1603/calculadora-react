import React from 'react'

function Button(props ) {

    const {handleOperation} = props

    return (
        <button className={`button 
            ${props.doubleColumn? 'doubleColumn' : ''}
            ${props.doubleRow? 'doubleRow' : ''}
            ${props.operation? 'operation' : ''}
            ${props.igual? 'igual' : ''}
            ${props.clear? 'clear' : ''}
        `} onClick={() => handleOperation(props.label)}>
             {props.label}
        </button>
    )
}

export default Button
