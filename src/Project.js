import React from 'react';
import fs from './images/fractalstickersmall.png'
import lmo from './images/letmeoutsmall.png'
import dd from './images/desertdrawing.jpg'
import ArtModal from './ArtModal'
import './App.css';

function Project(props){
    
    if(!props.content){
        return(
            <div>
                <a href={props.githubUrl}>
                    <h4 style={{color:'#007DD0'}} >{props.name}</h4>
                </a>
            </div>
        );
    }else if(props.artName === 'sculpt'){
        return (<ArtModal name={props.name} image={lmo}/>);
    }else if(props.artName === 'sticker'){
      return (<ArtModal name={props.name} image={fs}/>);
    }else if(props.artName === 'drawing'){
      return (<ArtModal name={props.name} image={dd}/>);
    }
  }

export default Project;