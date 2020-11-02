import React from 'react';

import './App.css';
import {Grid, Card} from 'semantic-ui-react';
import ProjectNavBar from './ProjectNavBar';
import CardList from './CardList';

function App() {
  return (
    <div className='app'>
      <Grid columns={1} padded>
      <Grid.Row>
        <Grid centered columns={2}>
          <Grid.Row>
            <Grid.Column className='title' width={13}>     
                {'William Jett'}
            </Grid.Column>
            <Grid.Column className='projects-title' width={3}>
                {'Projects'}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Row>
      <Grid.Row>
        <Grid columns={3} divided padded>
          <Grid.Row>
            <Grid.Column width={7}>
              <Card.Group centered>
                <Card 
                  fluid 
                  header={'Education'} 
                  description={
                    (<CardList 
                      items={['GPA - 3.01','Arizona State University, Tempe']}
                    />)
                  }
                  meta={['August 2014 - May 2020']}
                />
                <Card 
                  fluid 
                  header={'Choice Hotels Inc., Software Developer Intern'} 
                  description ={(<CardList items={
                    ['Learned Javascript React and Redux for web client application development', 
                    'Learned Java Spring for server-side web development',
                    'Used Git for version control',
                    'Developed a software mechanism for csv data submission from and end-user to a central system database',
                    'Participated in daily Scrum meetings'
                    ]
                  }/>)}
                  meta={'May 2018 - August 2018'}
                >
                </Card>
                <Card 
                  fluid 
                  header={'Lively Minds, Highschool Math Tutor'} 
                  description={(<CardList items={
                    ['Tutoring Highschool students in math subjects such as Algebra, Geometry, and Calculus', 
                    'Accomodating each student by tutoring in a way that best suits them',
                    'Logging important information related to each tutoring session'
                    ]}/>)} 
                  meta={'August 2020 - Current'}
                />
              </Card.Group>
            </Grid.Column>
            <Grid.Column width={6}>
              <Card.Group centered>
                <Card 
                  fluid 
                  header={'Skills'} 
                  description={(<CardList items={
                    ['I work well in a team, but I can also work effectively on my own', 
                    'I enjoy learning new technologies as often as I can',
                    'I know how to ask the right questions'
                    ]}/>)}
                />
                <Card 
                  fluid 
                  header={'Relevant Coursework'} 
                  description={(<CardList 
                    subLists={
                      {
                        'Software Design and Analysis':['Learned how to design software systems such that overall complexity of the system is minimized',
                          'Java Development with IntelliJ', 
                          'Structural and behavioral object oriented modeling',
                          'Software Design Patterns',
                          'Software Architecture'
                        ],
                        'Distributed Software Development':[
                          'RESTful and SOAP web service development with Microsoft .NET and Visual Studio',
                          'Client-Server architecture',
                          'Concurrency and multithreading'
                        ]
                      }
                    } items={
                    ['Software Design and Analysis', 
                    'Distributed Software Development'
                    ]}/>)}
                />
              </Card.Group>
            </Grid.Column>
            <Grid.Column width={3}>
              <ProjectNavBar/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Row>
    </Grid>
    </div>
  );
}

export default App;