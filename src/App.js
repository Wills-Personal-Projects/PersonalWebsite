import React from 'react';

import './App.css';
import {Container, Grid} from 'semantic-ui-react';
import TitleContext from './TitleContext';
import Resume from './Resume';
import ProjectNavBar from './ProjectNavBar';

function App() {
  return (
      <Container fluid>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={16}>
              <TitleContext/>
            </Grid.Column>
          </Grid.Row> 
          <Grid.Row>
            <Grid.Column width={13}>
              <Resume/>
            </Grid.Column>
            <Grid.Column width={3}>
              <ProjectNavBar/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
  );
}

export default App;