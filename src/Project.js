import React from 'react';

import './App.css';

function Project(props){
    return(
        <div>
            <a href={props.githubUrl}>
                <h4>{props.name}</h4>
            </a>
        </div>
    );
}

export default Project;