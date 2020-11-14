import React from 'react';
import './App.css';
import {Grid, Card} from 'semantic-ui-react';
import CardList from './CardList';

function Resume(){
    return (
       <Grid columns={2} padded>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Card.Group centered>
                        <Card
                            fluid
                            header={'Education'}
                            description={
                                [
                                    <Card 
                                        fluid
                                        header={'B.S. Computer Science, ASU'}
                                        description={(<CardList items={['GPA - 3.01']}/>)}
                                        meta={['August 2014 - May 2020']}
                                        style={{backgroundColor: 'lightgrey'}}
                                    />
                                ]
                            }
                            style={{backgroundColor: 'teal'}}
                        />
                    </Card.Group>
                    <Card.Group centered>
                        <Card
                            fluid 
                            header={'Work Experience'}
                            style={{backgroundColor: 'teal'}}
                            description={
                                [
                                    (<Card 
                                        fluid 
                                        header={'Lively Minds, Highschool Math Tutor'} 
                                        description={
                                            (<CardList 
                                                items={
                                                    [
                                                        'Tutoring Highschool students in math subjects such as Algebra, Geometry, and Calculus', 
                                                        'Accomodating each student by tutoring in a way that best suits them',
                                                        'Logging important information related to each tutoring session'
                                                    ]
                                                }
                                            />)
                                        } 
                                        meta={'August 2020 - Current'}
                                        style={{backgroundColor: 'lightgrey'}}
                                    />),
                                    (<Card 
                                        fluid 
                                        header={'Choice Hotels Inc., Software Developer Intern'} 
                                        description ={
                                            (<CardList 
                                                items={
                                                    [
                                                        'Learned Javascript React and Redux for web client application development', 
                                                        'Learned Java Spring for server-side web development',
                                                        'Used Git for version control',
                                                        'Developed a software mechanism for csv data submission from and end-user to a central system database',
                                                        'Participated in daily Scrum meetings'
                                                    ]
                                                }
                                            />)
                                        }
                            meta={'May 2018 - August 2018'}
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
                            header={'Skills'}
                            description={
                                [
                                    (<Card 
                                        fluid 
                                        description={(<CardList items={
                                        ['I work well in a team, but I can also work effectively on my own', 
                                        'I enjoy learning new technologies as often as I can',
                                        'I know how to ask the right questions'
                                        ]}/>)}
                                        style={{backgroundColor: 'lightgrey'}}
                                    />)
                                ]
                            }
                            style={{backgroundColor: 'teal'}}
                        />
                        
                        <Card 
                            fluid 
                            header={'Relevant Coursework'}
                            description={
                                [
                                    (<Card 
                                        fluid 
                                        description={(
                                            <CardList 
                                                subLists={
                                                    {
                                                        'Software Design and Analysis':
                                                            [
                                                                'Learned how to design software systems such that overall complexity of the system is minimized',
                                                                'Java Development with IntelliJ', 
                                                                'Structural and behavioral object oriented modeling',
                                                                'Software Design Patterns',
                                                                'Software Architecture'
                                                            ]
                                                    ,
                                                        'Distributed Software Development':
                                                            [
                                                                'RESTful and SOAP web service development with Microsoft .NET and Visual Studio',
                                                                'Client-Server architecture',
                                                                'Concurrency and multithreading'
                                                            ]
                                                    }
                                                } 
                                                items={
                                                    [
                                                        'Software Design and Analysis', 
                                                        'Distributed Software Development'
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
                        
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
       </Grid>
    );
}

export default Resume;