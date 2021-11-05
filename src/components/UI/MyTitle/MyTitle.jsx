import React from 'react'
import classes from './myTitle.module.css'

function MyTitle(props) {
    return (
        <div>
            <div className = {classes.title}>
                <b className = {classes.title}> {props.title} </b>
            </div>
        </div>
        
    )
}

export default MyTitle
