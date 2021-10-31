import React from 'react'
import { useState} from 'react';
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton';
import {  addBoardAction} from '../store/boarderReduser';
import { useDispatch, useSelector} from 'react-redux';
import cross from '../assets/img/times-solid.svg';

function CreateBoarders(props) {

  const [nameBoard, setNameBoard] = useState('');
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards.boards);
  
  const addBoard = (title) =>{
    const board = {
      "id": Date.now(),
      "title": title, 
    }
    dispatch(addBoardAction(board))
    setNameBoard('');
}

  return (     
    <div  style = {{background: '#DFE3E6'}}>  
       <MyInput 
            value={nameBoard} 
            onChange = {e=>setNameBoard(e.target.value)} 
            type="text" 
            placeholder="Введите название колонки"/>
            
        <div className = "two_btn">
          <MyButton onClick = {()=>{addBoard(nameBoard); props.setShowing(true)}}>Добавить колонку</MyButton>
          <img className ="img_svg"
           src={cross}
           alt="cross"
          onClick = {()=>props.setShowing(true)}/>
        </div>  
    </div>  
        
    )
}

export default CreateBoarders
