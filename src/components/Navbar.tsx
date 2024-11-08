import React from 'react';
import Searchbar from './Searchbar';
import Button from './Button';
import GridContainer from './GridContainer';

export default function Navbar() {
    return (
        <nav>
        <header >
            <GridContainer cols={12}>
            <Searchbar />
            <Button />
            </GridContainer>
                

        </header>
        </nav>
    );
}
