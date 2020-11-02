import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './App.css';
import Project from './Project';
export default class ProjectNavBar extends Component {
  
  render() {
    return (
            <Menu fluid vertical>
                    <Menu.Item
                   
                    >
                        <Project name='Nomadic Camping App' githubUrl={'https://nomadic1995.firebaseapp.com'} />
                    </Menu.Item>

                    <Menu.Item
                    
                    >
                        <Project name='Nomadic Camping App Wiki' githubUrl={'https://nomadic-frontend-wiki-1995.web.app'} />
                    </Menu.Item>

                    <Menu.Item
                   
                    >
                        <Project name='Nomadic App Github' githubUrl={'https://github.com/Wills-Personal-Projects/NomadicReactApp'} />
                    </Menu.Item>

                    <Menu.Item
                   
                    >
                        <Project name='Nomadic Backend Wiki' githubUrl={'https://nomadic-backend-wiki-1995.web.app'} />
                    </Menu.Item>

                    <Menu.Item
                   
                    >
                        <Project name='Campsite Service Github' githubUrl={'https://github.com/Wills-Personal-Projects/campsiteService'} />
                    </Menu.Item>

                    <Menu.Item
                   
                    >
                        <Project name='This Website Wiki' githubUrl={'https://my-website-wiki-1995.web.app'} />
                    </Menu.Item>

                    <Menu.Item
                    
                    >
                        <Project name='This Website Github' githubUrl={'https://github.com/Wills-Personal-Projects/PersonalWebsite'} />
                    </Menu.Item>
                
                </Menu>
    )
  }
}
