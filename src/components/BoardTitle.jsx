import React,{useState} from 'react'
import EditName from './UI/EditName/EditName';
import MyTitle from './UI/MyTitle/MyTitle';
import trash from '../assets/img/trash-alt-solid.svg';
import edit from '../assets/img/edit-solid.svg';


function BoardTitle(props) {

    const [showing, setShowing] = useState(1)

    return (
        <div  style = {{background: '#DFE3E6'}}>
        <div className = "board_title">
          <MyTitle  title ={props.board_title} />
          <div style = {{background: '#DFE3E6'}}>
            <img 
              className = "img_svg"
              src={edit}
              alt="edit"
              onClick = {()=>{ setShowing(0)}}
            />
            <img 
              className = "img_svg"
              src={trash}
              alt="trash"
              onClick = {()=>{props.removeBoard(props.board)}}
            />  
          </div>
        </div>

        {showing == 0 
          ?<EditName setShowing= {setShowing}
            changeTitleCard= {props.changeBoardTitle}
            newTitle= {props.newTitle}
            setNewTitle ={props.setNewTitle}
            card_id = {props.card_id}/>
          :null
        }
        

    
      </div>
    )
}

export default BoardTitle
