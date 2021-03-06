import React from 'react';
import {List} from 'semantic-ui-react';

function SubListItem(props){
    if(props.subItems !== undefined){
    return (
        <List bulleted>
            {props.subItems.map(subItem => (<List.Item style={{fontSize: '15px'}} key={subItem}>{subItem}</List.Item>))}
        </List>
        );
    }else{
    return (
        <>
        </>
        );
    }
}

export default SubListItem;