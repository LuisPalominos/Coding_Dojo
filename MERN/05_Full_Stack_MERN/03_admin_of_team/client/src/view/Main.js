import React from 'react'
import PageTemplate from '../template/PageTemplate'
import PlayersList from '../components/PlayersList'

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
        <div>
            <PageTemplate>
                <div className='container text-center bg-light-subtle'>
                    <div className='pb-3'>
                        <PlayersList/>
                    </div>
                </div>
            </PageTemplate>
        </div>
    )
}

export default Main