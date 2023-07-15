import React from 'react'

const Tarea = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
let Tarea = props.caja;

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
const handleChange = (idx) => {
    Tarea[idx].status = true;
};

const handleClick = (e) => {

};

// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className="container">
            <div className="row">
                {Tarea.map((item, idx) => (
                <div key={idx}>
                    <div  className="w-100 h-100 m-1">
                        <p className={item.status ? "text-decoration-line-through" :item.status===false}>
                            {item.name}
                            <input className='m-1' type="checkbox"  onChange={()=>handleChange(idx)}/>
                            <button type="button" className="btn btn-primary m-1" onClick={handleClick} >Delete</button>
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};
export default Tarea