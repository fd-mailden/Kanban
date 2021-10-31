const defaultState ={
    boards: [],
    amountOfColumns: 0 ,
   }
 
 
   const ADD_BOARD ="ADD_BOARD";
   const REMOVE_BOARD ="REMOVE_BOARD";
   const EDIT_BOARD ="EDIN_BOARD";
 
 export const boarderReduser = (state = defaultState, action) =>{
     switch(action.type){
        case ADD_BOARD:
          return {...state, boards: [...state.boards, action.payload], amountOfColumns: state.boards.length + 1 }
        
        case REMOVE_BOARD:
          return {...state, boards: state.boards.filter(board=> board.id !== action.payload), amountOfColumns: state.boards.length - 1  }
        case EDIT_BOARD:
            var board_id = action.payload.board_id;
            var new_title = action.payload.new_title;
                 for(let i = 0; i< state.boards.length; i++){
                     if(board_id == state.boards[i].id){
                       state.boards[i].title = new_title
                     }
                 }
                   return {...state}
        default:
            return state;
     }
   
   }
 
 export const addBoardAction =(payload)=>({type:ADD_BOARD, payload});
 export const removeBoardAction =(payload)=>({type:REMOVE_BOARD, payload} );
 export const editBoardAction =(payload)=>({type:EDIT_BOARD, payload} );