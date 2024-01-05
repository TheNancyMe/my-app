import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to= {path}>{props.name}</NavLink>
            </div>
    )
}

const Message = (props) => { 
return <div className={s.message}>{props.message}</div>

}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
            
            <DialogItem name="Nancy" id="1"/>
            <DialogItem name="Fedor" id="2"/>
            <DialogItem name="Sasha" id="3"/>
            <DialogItem name="Victor" id="4"/>
            <DialogItem name="Sveta" id="5"/>
            <DialogItem name="Vanya" id="6"/>
           </div>
           <div className={s.messages}>
            <Message message="Hello"/>
            <Message message="Hello?"/>
            <Message message="Are you there?"/>
           </div>
        </div>
    )
}
export default Dialogs