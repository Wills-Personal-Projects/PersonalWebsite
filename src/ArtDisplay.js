import './App.css';
import fs from './images/fractalstickersmall.png'
import lmo from './images/letmeoutsmall.png'
import {Grid} from 'semantic-ui-react'

function ArtDisplay(props) {
  if(props.sticker){
    return (
      <Grid>
        <Grid.Column>
          <Grid.Row>
            <img src={fs}/>
          </Grid.Row>
          </Grid.Column>
      </Grid>
    );
  }else{
    return (
      <Grid>
        <Grid.Column>
          <Grid.Row>
            <img src={lmo}/>
          </Grid.Row>
          </Grid.Column>
      </Grid>
    );
  }
}

export default ArtDisplay;
