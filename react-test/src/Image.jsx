import React from 'react'


export default function Image({state, setState}){

    function handleClick(e){

        // let URL = window.URL;
        let url = URL.createObjectURL(e.target.files[0]);
        setState({url:url})
    }

    console.log(state)

    return(
        <div>
            Image


            <img src={state.url}></img>
            <form>
                <input type='file' onChange={handleClick}/>

            </form>
        </div>
    )
}