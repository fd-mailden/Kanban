import React from 'react'
import classes from './myTitle.module.css'

function MyTitle(props) {
    return (
        <div>
            <div className = {classes.title}>
                {props.title}
            </div>
        </div>
        
    )
}

export default MyTitle
