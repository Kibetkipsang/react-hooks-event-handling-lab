import React from 'react'

function Keypad (){

    function HandleChange(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={HandleChange}/>
        </div>
    )
}

export default Keypad;