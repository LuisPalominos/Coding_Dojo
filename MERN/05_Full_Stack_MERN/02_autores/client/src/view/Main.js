import React from 'react'
import { Link } from "react-router-dom";
import AuthorsList from '../components/AuthorsList'

const Main = () => {
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
        <div className="container text-center">
            <h1 className='text-center my-3'>Favorite authors</h1>
            <Link
                className="mx-1 mb-3 btn btn-link btn-sm py-0"
                to={`/new`}
            >
                Add an author
            </Link>
            <p>We have quotes by:</p>
            <AuthorsList />
        </div>
    )
}

export default Main