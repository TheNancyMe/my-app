import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Nancy"}, 
        {id: 2, name: "Fedor"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Victor"},
        {id: 5, name: "Sveta"},
        {id: 6, name: "Vanya"},
        
    ]

    let messages = [
        {id: 1, message: "Hello"}, 
        {id: 2, message: "Hello?"},
        {id: 3, message: "Are you there?"},
        
    ]

    let dialogsElements =  dialogs
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );

    let messagesElements = messages
    .map( message => <Message message={message.message}/> )

    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
            {dialogsElements}
           </div>
           <div className={s.messages}>
            {messagesElements}
           </div>
        </div>
    )
}
export default Dialogs