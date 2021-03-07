import React from 'react';
import {Header, Button, Modal, Icon} from 'semantic-ui-react'
import fs from './images/fractalstickersmall.png'
import lmo from './images/letmeoutsmall.png'
import {Grid} from 'semantic-ui-react'
import './App.css';

function Project(props){
    const [open, setOpen] = React.useState(false)
    if(!props.content){
        return(
            <div>
                <a href={props.githubUrl}>
                    <h4 style={{color:'#007DD0'}} >{props.name}</h4>
                </a>
            </div>
        );
    }else if(props.artName === 'sculpt'){
        return (
            <Modal
              basic
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              size='small'
              trigger={<h4 style={{color:'#007DD0'}}>{props.name}</h4>}
            >
              <Modal.Content>
                <Grid>
                    <Grid.Column>
                        <Grid.Row>
                            <img src={lmo}/>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
              </Modal.Content>
              <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                  <Icon name='remove' /> Close
                </Button>
              </Modal.Actions>
            </Modal>
          )
    }else if(props.artName === 'sticker'){
        return (
            <Modal
              basic
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              size='small'
              trigger={<h4 style={{color:'#007DD0'}}>{props.name}</h4>}
            >
              <Modal.Content>
                <Grid>
                    <Grid.Column>
                        <Grid.Row>
                            <img src={fs}/>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
              </Modal.Content>
              <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                  <Icon name='remove' /> Close
                </Button>
              </Modal.Actions>
            </Modal>
          )
    }
}

export default Project;