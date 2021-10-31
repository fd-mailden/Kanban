import React from 'react'
import './app.css'
import { useDispatch, useSelector} from 'react-redux';
import { useState} from 'react';
import { removeBoardAction, editBoardAction} from './store/boarderReduser';
import { removeCardAction, ChangeColumnIdForCard, editCardAction, removeCardWhithBoarderIDAction} from './store/cardReduser';
import CreateCards from './components/CreateCards';
import Cards from './components/Cards';
import ShowCreateBoard from './components/ShowCreateBoard';
import BoardTitle from './components/BoardTitle';

function App() {
  const amountOfColumns = useSelector(state => state.boards.amountOfColumns);

  const [newTitle, setNewTitle] = useState('');

  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards.boards);
  const cards = useSelector(state => state.cards.cards);
 
  //----redux function------------
  const removeCard = (card) =>{
    dispatch(removeCardAction(card.id));
  }

  const changeTitleCard = (card_id, title) => {
    if(title !== ''){
       const date = {
      "card_id": card_id,
      "new_title": title, 
    }
    dispatch(editCardAction(date)); 
    setNewTitle(''); 
    }
  }

  const removeBoard = (board) =>{
   
    dispatch(removeBoardAction(board.id));
    const columnId  = {
      "column_id": board.id
    }
    dispatch(removeCardWhithBoarderIDAction(columnId));

  }

  const changeBoardTitle = (board_id, title) =>{
    if(title !== ''){
      const date = {
      "board_id": board_id,
      "new_title": title, 
    }
    dispatch(editBoardAction(date)); 
    setNewTitle('');
    }
     

  }

  //---------- drag and drop -------
  const [currentItem, setCurrentItem] = useState(null);

  function dragOverHandler(e){
    e.preventDefault();
    if(e.target.className == 'card'){
      e.target.style.boxShadow = '0 4px 3px gray';
    }
  }

  function dragLeavHandler(e){  
    e.target.style.boxShadow = 'none';
  }

  function dragStartHandler(e , idCard){ 
    setCurrentItem(idCard); 
  }

  function dragEndHandler(e){
    e.target.style.boxShadow = 'none';
  }

  ///---- dropHandler ---------- 
  function dropHandler(e,  idCard, idBoard){
    e.preventDefault();
    const date = {
      "card_id": currentItem,
      "column_id": idBoard,
    }

    dispatch(ChangeColumnIdForCard(date));
    e.target.style.boxShadow = 'none';
    setCurrentItem(null);
  }

  /// ----- dropHandler for empti column -------
  function dropCardHandler(e, idBoard){
    e.preventDefault();
    console.log(currentItem+ " --"+ idBoard);
    const date = {
      "card_id": currentItem,
      "column_id": idBoard, 
    }

    dispatch(ChangeColumnIdForCard(date));
    e.target.style.boxShadow = 'none';
    setCurrentItem(null);
}


  return (
    <div className="app" >
      {boards.map(board=> 
        <div className ="board" onDragOver = {(e)=>dragOverHandler(e)}
          onDrop = {(e)=>dropCardHandler(e,  board.id)}>

          <BoardTitle board_title ={board.title} changeBoardTitle ={changeBoardTitle}board={board} removeBoard={removeBoard}
          setNewTitle= {setNewTitle}  newTitle ={newTitle}  card_id= {board.id}/>

          <div className = "cards">
            {cards.map(card=>
            <div style = {{background: '#DFE3E6'}}>
              {card.columnId == board.id 
                ? <div 
                  onDragOver = {(e)=>dragOverHandler(e)}
                  onDragLeave = {(e)=>dragLeavHandler(e)}
                  onDragStart = {(e)=>dragStartHandler(e,  card.id)}
                  onDragEnd = {(e)=>dragEndHandler(e)}
                  onDrop = {(e)=>dropHandler(e, card.id, board.id)}
                  className = "todo" 
                  draggable = {true}
                  className = "card">
                  
                  <Cards card_title ={card.title} removeCard= {removeCard} card_id = {card.id} card={card}
                    setNewTitle ={setNewTitle} newTitle  = {newTitle}  changeTitleCard={changeTitleCard} />

                </div>
                  : <div style = {{ display: 'none',visibility: 'hidden'}}></div>
              }
            </div>
              )}
          </div>
                 <CreateCards  boarderId = {board.id}/>
        </div>
      )}
    {amountOfColumns < 4?  <ShowCreateBoard /> : null}  
    
  </div>
  );
}

export default App;
