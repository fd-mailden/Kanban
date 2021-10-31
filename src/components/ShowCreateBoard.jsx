import React,{useState} from 'react'
import CreateBoarders from './CreateBoarders'
import plus from '../assets/img/plus-solid.svg'


function ShowCreateBoard() {

    const [showing, setShowing] = useState(true)

    return (
        <div className = "add_board">
            
        <div className = "add_title" onClick = {()=>setShowing(false)}>
        <img className = "img_svg"
            src={plus}
            alt="Добавить" />
            <p style = {{color: '#6B808C', background:'#DFE3E6'}}>Добавить еще одну колонку</p>
       </div>
       
       {showing == false 
            ?<CreateBoarders setShowing ={setShowing}/>
            :null
        }
     </div>
    )
}

export default ShowCreateBoard
