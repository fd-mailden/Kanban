const defaultState ={
   cards: [],
  }

  const ADD_CARD ="ADD_CARD";
  const REMOVE_CARD ="REMOVE_CARD";
  const CHANGE_COLUMN_ID_FOR_CARD ="CHANGE_COLUMN_ID_FOR_CARD";
  const EDIN_CARD ="EDIN_CARD"
  const REMVE_CADR_WHITH_BOARD_ID ="REMVE_CADR_WHITH_BOARD_ID"

export const cardReduser = (state = defaultState, action) =>{
    switch(action.type){
      case ADD_CARD:
        return {...state, cards: [...state.cards, action.payload] }

      case EDIN_CARD:
          var card_id = action.payload.card_id;
          var new_title = action.payload.new_title;
           for(let i = 0; i< state.cards.length; i++){
               if(card_id == state.cards[i].id){
                 state.cards[i].title = new_title
               }
           }
             return {...state}

      case REMOVE_CARD:
        return {...state, cards: state.cards.filter(card=> card.id !== action.payload) }

      case CHANGE_COLUMN_ID_FOR_CARD:
         var card_id = action.payload.card_id;
         var column_id = action.payload.column_id;
          for(let i = 0; i< state.cards.length; i++){
              if(card_id == state.cards[i].id){
                state.cards[i].columnId = column_id
              }
          }
            return {...state }
      
      case REMVE_CADR_WHITH_BOARD_ID:
         var column_id = action.payload.column_id;
            return {...state, cards: state.cards.filter(card=> card.columnId !== column_id) }

      default:
        return state;
    }
  
  }

export const addCardAction =(payload)=>({
  type:ADD_CARD, 
  payload
});

export const removeCardAction =(payload)=>({
  type:REMOVE_CARD, 
  payload});

export const ChangeColumnIdForCard =(payload)=>({
  type:CHANGE_COLUMN_ID_FOR_CARD, 
  payload
});

export const editCardAction =(payload)=>({
  type:EDIN_CARD, 
  payload
});

export const removeCardWhithBoarderIDAction =(payload)=>({
  type:REMVE_CADR_WHITH_BOARD_ID, 
  payload
});



