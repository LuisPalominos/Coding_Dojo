import React from 'react'

const Box = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
    const { data } = props;
    const activeData = Object.keys(data).find((dataKey) => data[dataKey].push);

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------


// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className='container text-center'>
            <p>{activeData ? data[activeData].name : 'None'} content is showing here</p>
            {Object.keys(data).map((dataKey) => (
                <div key={dataKey}
                className={`box ${data[dataKey].push ? 'active' : ''}`}>
                </div>
            ))}
        </div>
    );
};

export default Box