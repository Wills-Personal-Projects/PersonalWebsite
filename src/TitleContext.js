import React from 'react';

import './App.css';
import {Container} from 'semantic-ui-react';
import Title from './Title';

function TitleContext(){
    return (
        <Container fluid>
            <Title/>
        </Container>
    );
}

export default TitleContext;