import React from 'react'

function Display(props) {
    const {lastNumber, currentNumber} = props
    return (
        <div className='display'>
            <div className='display-content'>
                <p className='display-operacao'>{lastNumber === '' ? 0 : lastNumber}</p>
                <p className='display-resultado'>{currentNumber === '' ? 0: currentNumber}</p>
            </div>
        </div>
    )
}

export default Display
