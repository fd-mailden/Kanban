import React from 'react'
import classes from './myButton.module.css'

function MyButton({children, ...props}) {
    return (
        <button className = {classes.btn_add}  {...props}>
            {children}
        </button>
    ) 
}

export default MyButton