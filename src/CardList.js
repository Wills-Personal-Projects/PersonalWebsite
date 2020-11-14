import React from 'react';
import { List } from 'semantic-ui-react';
import SubListItem from './SubListItem';

function CardList(props) {
    if(props.subLists !== undefined){
        return (
            <List bulleted>
                {
                    props.items.map(item => (<List.Item style={{fontSize: '15px'}} key={item}>{item}<SubListItem subItems={props.subLists[item]}/></List.Item>))
                }
            </List>
        );
    }else{
        return (
            <List bulleted>
                {
                    props.items.map(item => (<List.Item style={{fontSize: '15px'}} key={item}>{item}</List.Item>))
                }
            </List>
        );
    }
}

export default CardList;
