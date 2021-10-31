import React from 'react'
import { useState} from 'react';
import EditName from './UI/EditName/EditName';
import trash from '../assets/img/trash-alt-solid.svg';



function Cards(props) {
  const [showing, setShowing] = useState(1);

    return (
        
      <div   style = {{background: '#DFE3E6'}}> 
        <div className = "card_item" onClick = {()=>setShowing(0)}>
          <p className = "title">{props.card_title}</p>
          <img className = "img_svg_card"
              src={trash}
              alt="trash"
          onClick = {()=>props.removeCard(props.card)}/>
        </div>
        {showing == 0 
        ? <div style = {{background: 'white'}}>
           <EditName setShowing={setShowing}
            card_id = {props.card_id}
            setNewTitle ={props.setNewTitle}
            newTitle  = {props.newTitle}
            changeTitleCard={props.changeTitleCard}/></div>
        :null
        } 
    </div>
    )
}

export default Cards
