import React, { Component } from 'react'
import {Card,Header,Grid, Menu } from 'semantic-ui-react'
import './App.css';
import Project from './Project';
export default class ProjectNavBar extends Component {
  
  render() {
    return (
        <Grid>
            <Grid.Column>
                <Card
                    header={'Coding Projects'}
                    description={
                        (<Grid columns={1} padded>
                            <Grid.Row>
                                <Grid.Column>
                                    <Menu style={{backgroundColor: 'lightgrey'}} fluid vertical>
                                        <Menu.Item>
                                            <Project name='Nomadic Camping App' content={false} githubUrl={'https://nomadic1995.firebaseapp.com'} />
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Project name='Nomadic Camping App Wiki' content={false}  githubUrl={'https://nomadic-frontend-wiki-1995.web.app'} />
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Project name='Nomadic App Github' content={false} githubUrl={'https://github.com/Wills-Personal-Projects/NomadicReactApp'} />
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Project name='Nomadic Backend Wiki' content={false} githubUrl={'https://nomadic-backend-wiki-1995.web.app'} />
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Project name='Campsite Service Github'content={false} githubUrl={'https://github.com/Wills-Personal-Projects/campsiteService'} />
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Project name='This Website Wiki' content={false} githubUrl={'https://my-website-wiki-1995.web.app'} />
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Project name='This Website Github' content={false} githubUrl={'https://github.com/Wills-Personal-Projects/PersonalWebsite'} />
                                        </Menu.Item>
                                    </Menu>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>)
                    }
                    style={{backgroundColor:'teal'}}
                />
                <Card
                    header={'Sculptures and Stickers'}
                    description={
                        (<Grid columns={1} padded>
                            <Grid.Row>
                                <Grid.Column>
                                    <Menu style={{backgroundColor: 'lightgrey'}} fluid vertical>
                                        <Menu.Item>
                                            <Project name='3D Sculptures' content={true} artName={'sculpt'} />
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Project name='Sticker Designs' content={true} artName={'sticker'} />
                                        </Menu.Item>
                                    </Menu>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>)
                    }
                    style={{backgroundColor:'teal'}}
                />
            </Grid.Column>
        </Grid>
    )
  }
}
