import React,{useState} from 'react'
import CreateBoarders from './CreateBoarders'
import plus from '../assets/img/plus-solid.svg'


function ShowCreateBoard() {

    const [showing, setShowing] = useState(1)

    return (
        <div className = "add_board">
            
        <div className = "add_title" onClick = {()=>setShowing(0)}>
        <img className = "img_svg"
            src={plus}
            alt="Добавить" />
            <p style = {{color: '#6B808C', background:'#DFE3E6'}}>Добавить еще одну колонку</p>
       </div>
       
       {showing == 0 
            ?<CreateBoarders setShowing ={setShowing}/>
            :null
        }
     </div>
    )
}

export default ShowCreateBoard
