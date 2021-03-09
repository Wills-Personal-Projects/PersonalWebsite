import React from 'react';
import {Header, Button, Modal, Icon} from 'semantic-ui-react'
import {Grid} from 'semantic-ui-react'

function ArtModal(props){
    const [open, setOpen] = React.useState(false)
    return(
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
                            <img src={props.image}/>
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
    );
}

export default ArtModal