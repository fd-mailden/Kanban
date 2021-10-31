
import React from 'react'
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton';
import { useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {  addCardAction} from '../store/cardReduser';
import plus from '../assets/img/plus-solid.svg';
import cross from '../assets/img/times-solid.svg';

function CreateCards(props) {

  const [nameCard, setNameCard] = useState('');
  const [showing, setShowing] = useState(1)

  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards.cards);
 
  const addCard = (title, boardId) => {
      const card = {
        "id": Date.now(),
        "title": title, 
        "columnId": boardId,
      }
    
      dispatch(addCardAction(card));
      setNameCard('');
  };

  return (
      <div className = "add_board" >
          
           {showing == 0 
           ? <div style = {{background: '#DFE3E6'}}>
             <MyInput value={nameCard} onChange = {e=>setNameCard(e.target.value)} 
               type="text" 
               placeholder="Введите название карточки"/>
              <div  className = "two_btn" >
                <MyButton onClick = {()=>{addCard(nameCard,  props.boarderId); setShowing(1) }}>Добавить карточку</MyButton>
                <img className = "img_svg"
                  src={cross}
                  alt="cross"
                  onClick = {()=>setShowing(1)}/>
               </div>            
            </div> 

             :null
        }
          
          <div className = "add_title" onClick = {()=>setShowing(0)}>
            <img className = "img_svg"
              src={plus}
              alt="Добавить" />
            <p style = {{background: '#DFE3E6'}}>Добавить еще одну карточку</p>
          </div>
      </div>
    )
}

export default CreateCards
