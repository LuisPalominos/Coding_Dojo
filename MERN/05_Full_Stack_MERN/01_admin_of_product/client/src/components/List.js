import React from 'react'

const List = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------


// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------



// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div>
            <h1>All products</h1>
            {props.lista.map((item,index)=>{
                return <p key={index}>{item.title}</p>
            })}
        </div>
    )
}

export default List