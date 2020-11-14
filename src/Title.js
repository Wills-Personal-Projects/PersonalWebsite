import React from 'react';
import './App.css';
import {Header,Grid} from 'semantic-ui-react';

function Title(){
    return (
      <Grid centered columns={3}>
        <Grid.Row>
          <Grid.Column >
            <Grid columns={4}>
              <Grid.Row textAlign='center'>
                <Grid.Column>     
                  <Header className='title' as='h1'>W</Header>
                </Grid.Column>
                <Grid.Column>     
                  <Header className='title-i' as='h1'>i</Header>
                </Grid.Column>
                <Grid.Column>     
                  <Header className='title' as='h1'>l</Header>
                </Grid.Column>
                <Grid.Column>     
                  <Header className='title' as='h1'>l</Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={1}/>
          <Grid.Column >
            <Grid columns={4}>
              <Grid.Row textAlign='center'>
                <Grid.Column>     
                  <Header className='title' as='h1'>J</Header>
                </Grid.Column>
                <Grid.Column >     
                  <Header className='title-e' as='h1'>e</Header>
                </Grid.Column>
                <Grid.Column>     
                  <Header className='title' as='h1'>t</Header>
                </Grid.Column>
                <Grid.Column>     
                  <Header className='title-t' as='h1'>t</Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
}

export default Title;