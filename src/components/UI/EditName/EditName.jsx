import React from 'react'
import MyButton from '../MyButton/MyButton'
import MyInput from '../MyInput/MyInput';
import cross from './times-solid.svg';


function EditName(props) {
    return (
        <div style = {{background: 'white'}}>
            <MyInput value={props.newTitle} onChange = {e=>props.setNewTitle(e.target.value)} 
                      type="text" 
                      placeholder="Edit"/>
        <div className ="two_btn_edit">
            <MyButton onClick = {()=>{props.changeTitleCard(props.card_id, props.newTitle);props.setShowing(true)}}>edit</MyButton>
            <img className = "img_svg_card"
                src={cross}
                alt="cross"
                onClick = {()=>props.setShowing(true)}/>
        </div>
      
            
            
        </div>
    )
}

export default EditName
