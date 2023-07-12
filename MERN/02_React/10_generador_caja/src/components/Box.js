import React from 'react'

const Box = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
let cajaColor = props.caja;

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------


// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className="container">
        <div className="row">
            {cajaColor.map((item, idx) => (
            <div key={idx} className="col-1">
                <div style={{ backgroundColor: item }} className="w-100 h-100 border border-dark">
                    <div style={{ color: item }}>caja</div>
                    <div style={{ color: item }}>caja</div>
                    <div style={{ color: item }}>caja</div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};
export default Box