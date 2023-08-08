import React from 'react'
import { Link } from "react-router-dom";

const PageTemplate = (props) => {
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
        <div className='bg-secondary-subtle'>
            <div className='container d-flex  fs-4 p-5'>
                <Link
                    className="mx-1 btn btn-link btn-sm py-0 fs-4"
                    to={`/new`}
                >
                    Manage Player
                </Link>
                |
                <Link
                    className="mx-1 btn btn-link btn-sm py-0 fs-4"
                    to={`/new`}
                >
                    Manage Player Status
                </Link>
            </div>
            <div >
                {props.children}
            </div>
        </div>
    )
}

export default PageTemplate