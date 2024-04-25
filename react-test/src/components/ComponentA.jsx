import React from 'react'


export default function ComponentA( props ){

    function handleClick(e){
        console.log('kliku')
        

        
    }

    return(
        <div>
            To jest komponent a
            <button onClick={handleClick}>KLIKNIJ </button>
        </div>
    )
}


