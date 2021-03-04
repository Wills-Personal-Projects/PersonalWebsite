import React from 'react';
import './App.css';
import {Grid, Card} from 'semantic-ui-react';
import CardList from './CardList';

function Resume(){
    return (
       <Grid columns={2}>
            <Grid.Row>
            <Grid.Column width={8}>
                    <Card.Group centered>
                        
                        <Card 
                            fluid 
                            header={'Professional Experience'}
                            description={
                                [
                                    (<Card 
                                        fluid 
                                        description={(
                                            <CardList 
                                                subLists={
                                                    {
                                                        'ASU Capstone Project':
                                                            [
                                                                'Spent 1 year designing and developing the cloud-based middleware software.',
                                                                'The purpose of the software is to provide product information to the 3rd party API system and to save information such as purchase records or existing product attributes to SQL databases.', 
                                                                'Set up and customized e-commerce software product wiki',
                                                                'Created UML, use case and sequence diagrams which are all documented in the wiki.',
                                                                'Debugged http endpoints using swagger and postman',
                                                                'Significantly reduced time required to categorize and post merchandise on Ebay and Etsy.'
                                                            ]
                                                    ,
                                                        'Choice Hotels International Internship':
                                                            [
                                                                'Spent 3 months assisting software engineers develop a cloud based client-server application',
                                                                'This application allows hotel managers to submit revenue and employee hours to a central system that redirects the information to appropriate subsystems', 
                                                                'My code was regularly merged into the main project branch and the functionality that I implemented is still being used'
                                                            ]
                                                    }
                                                } 
                                                items={
                                                    [
                                                        'ASU Capstone Project',
                                                        'Choice Hotels International Internship'
                                                    ]
                                                }
                                            />
                                        )}
                                        style={{backgroundColor: 'lightgrey'}}
                                    />)
                                ]
                            }
                            style={{backgroundColor: 'teal'}}
                        />
                        
                        <Card
                            fluid 
                            header={'Work Experience'}
                            style={{backgroundColor: 'teal'}}
                            description={
                                [
                                    (<Card 
                                        fluid 
                                        header={'Lively Minds, Advanced Highschool Math Tutor'} 
                                        meta={'August 2020 - Current'}
                                        style={{backgroundColor: 'lightgrey'}}
                                    />),
                                    (<Card 
                                        fluid 
                                        header={'Choice Hotels Inc., Software Developer Intern'} 
                                        meta={'May 2018 - August 2018'}
                                        style={{backgroundColor: 'lightgrey'}}

                                    />),
                                    (<Card 
                                        fluid 
                                        header={'Arizona State University, Computer Science Tutor'} 
                                        meta={'August 2017 - December 2019'}
                                        style={{backgroundColor: 'lightgrey'}}
                                    />)
                            ]
                        }
                        />
                    </Card.Group>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Card.Group centered>
                        <Card
                            fluid 
                            header={'Professional Summary'}
                            description={
                                [
                                    (<Card 
                                        fluid 
                                        description={(<CardList items={
                                            ['Multi-talented problem solver with experience in the business enterprise software industry.', 
                                            'Proficient in Java, HTML, JavaScript, C++, C#, F#, and Linux shell scripting.',
                                            'Two years of relevant experience in software development and analysis.',
                                            'Ability to train others in Java programming, desktop application development, algorithm design and analysis, and theoretical computer science.',
                                            'I am able to gather new information and compile that into a working mental model very quickly.'
                                            ]}/>)}
                                        style={{backgroundColor: 'lightgrey'}}
                                    />)
                                ]
                            }
                            style={{backgroundColor: 'teal'}}
                        />

                        <Card
                            fluid
                            header={'Education'}
                            description={
                                [
                                    <Card 
                                        fluid
                                        header={'B.S. Computer Science'}
                                        description={<CardList items={['Discrete Mathematical Structures','Statistical Analysis', 'Distributed Software Developement', 'Computer Graphics', 'Mobile App Development']}/>}
                                        meta={['School of Computing, Informatics, and Decision Systems Engineering Arizona State University']}
                                        style={{backgroundColor: 'lightgrey'}}
                                    />
                                ]
                            }
                            style={{backgroundColor: 'teal'}}
                        />

                        <Card
                            fluid
                            header={'Hobbies'}
                            description={
                                [
                                    <Card 
                                        fluid
                                        description={<CardList items={['3D Sculpture','Custom sticker design and printing']}/>}
                                        meta={['Links to some of my sculptures and sticker designs are also on this site!']}
                                        style={{backgroundColor: 'lightgrey'}}
                                    />
                                ]
                            }
                            style={{backgroundColor: 'teal'}}
                        />
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
       </Grid>
    );
}

export default Resume;