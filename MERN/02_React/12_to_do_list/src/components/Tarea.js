import React, {useState} from 'react'

const Tarea = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const [tareaCheck, setTareaCheck]=useState(props.caja);
console.log(props.caja);
// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
const handleChange = (id) => {
    const newtareaCheck = [...tareaCheck];
    newtareaCheck[id].status = !newtareaCheck[id].status ;
    setTareaCheck(newtareaCheck);
};

const handleClick = (id) => {
    const newtareaChecks = [...tareaCheck];
    newtareaChecks.splice(id, 1);
    setTareaCheck(newtareaChecks);
};

// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className="container">
            <div className="row">
                {props.caja.map((item, id) => (
                <div key={item.id}>
                    <div  className="w-100 h-100 m-1">
                        <p style={{textDecorationLine: item.status ?  "line-through" : "none"}}>
                            {item.name}
                            <input className='m-1' type="checkbox" checked={item.status} onChange={()=>handleChange(id)}/>
                            <button type="button" className="btn btn-primary m-1" onClick={()=>handleClick(id)} >Delete</button>
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};
export default Tarea