import React from 'react'
import classes from './myInput.module.css'

const MyInput = React.forwardRef((props, ref) =>{
    return (
        <textarea className ={classes.textarea } ref = {ref}  {...props}/>
    );      
}
);

export default MyInput