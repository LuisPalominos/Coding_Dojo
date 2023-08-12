import React from 'react'
import { Link } from "react-router-dom";
import styles from './PageTemplate.module.css'

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
        <div className={styles.bgColor}>
            <div className='container d-flex fs-4 p-5'>
                <Link
                    className="mx-1 btn btn-link btn-sm py-0 fs-4"
                    to={`/`}
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
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}

export default PageTemplate