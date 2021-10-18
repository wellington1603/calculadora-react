import React, { useState } from 'react'
import Button from './Button'
import Display from './Display'

const BodyCalculadora = () => {

    const [currentNumber, setCurrentNumber] = useState('')
    const [lastNumber, setLastNumber] = useState('')


    function calculator(){
        const splitNumbers = currentNumber.split(' ')
        const fristNumber = parseFloat(splitNumbers[0])
        const lastNumber = parseFloat(splitNumbers[2])
        const operator = splitNumbers[1]

        switch(operator){
            case '+':
                setCurrentNumber((fristNumber + lastNumber).toString())
                return
            case '-':
                setCurrentNumber((fristNumber - lastNumber).toString())
                return
            case '*':
                setCurrentNumber((fristNumber * lastNumber).toString())
                return
            case '/':
                setCurrentNumber((fristNumber / lastNumber).toString())
                return
            default:
                return
        }
    }

    function handleOperation(e){

        if(e === '+' ||  e === '-' || e === '/'|| e === '*'){
            setCurrentNumber(currentNumber + ' ' + e + ' ')
            return
        }
        
        switch(e){
            case 'x':
                setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
                return
            case 'Ac':
                setLastNumber('')
                setCurrentNumber('')
                return
            case '=':
                setLastNumber(currentNumber + ' = ')
                calculator()
                return
            default:
                return
        }

        setCurrentNumber(currentNumber + e)
    }

    return (
        <div className='body-cal'>
            <Display lastNumber={lastNumber} currentNumber={currentNumber} />
            
            
            <Button label='Ac' clear handleOperation={handleOperation}/>
            <Button label='x' clear handleOperation={handleOperation}/>
            <Button label='/'  handleOperation={handleOperation} operation/>
            <Button label='*' handleOperation={handleOperation} operation/>
            <Button label='7' handleOperation={handleOperation} />
            <Button label='8' handleOperation={handleOperation}/>
            <Button label='9' handleOperation={handleOperation}/>
            <Button label='-' handleOperation={handleOperation} operation/>
            <Button label='6' handleOperation={handleOperation}/>
            <Button label='5' handleOperation={handleOperation}/>
            <Button label='4' handleOperation={handleOperation}/>
            <Button label='+' handleOperation={handleOperation} operation doubleRow/>
            <Button label='1' handleOperation={handleOperation}/>
            <Button label='2' handleOperation={handleOperation}/>
            <Button label='3' handleOperation={handleOperation}/>
            <Button label='0' handleOperation={handleOperation} doubleColumn/>
            <Button label='.' handleOperation={handleOperation} />
            <Button label='=' handleOperation={handleOperation} doubleRow igual/>
         
            
        </div>
    )
}   

export default BodyCalculadora
