import React from 'react'
import Searchbar from './Searchbar'
import GridContainer from './GridContainer'

export default function Navbar() {
    return <>
    <nav>
        <header>
            <GridContainer cols={12}>
                <div className='col-span-8'>
                <Searchbar  cols={8}/>

                </div>


            </GridContainer>
        </header>
    </nav>
    </>
}
