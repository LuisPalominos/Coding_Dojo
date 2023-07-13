import React, {useState} from 'react'

const Tarea = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
let Tarea = props.caja;
const [isCheked, setIsCheked] = useState(false);


// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
const  handleChange=(e)=>{
    setIsCheked(e.target.checked)
    };
const  handleClick=()=>{

}

// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className="container">
            <div className="row">
                {Tarea.map((item, idx) => (
                <div key={idx}>
                    <div  className="w-100 h-100 m-1">
                        <p className={isCheked ? "text-decoration-line-through" : undefined}>
                            {item}
                            <input className='m-1' type="checkbox" checked={isCheked} onChange={handleChange}/>
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