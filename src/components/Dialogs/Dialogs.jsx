import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
            <div className={s.dialog + '' + s.active}>
                Nancy
            </div>
            <div className={s.dialog}>
                Fedor
            </div>
            <div className={s.dialog}>
                Sasha
            </div>
            <div className={s.dialog}>
                Victor
            </div>
            <div className={s.dialog}>
                Sveta
            </div>
            <div className={s.dialog}>
                Vanya
            </div>
           </div>
           <div className={s.messages}>
            <div className={s.message}>Whatsapp!</div>
            <div className={s.message}>Hello?</div>
            <div className={s.message}>Are you there?</div>
           </div>
        </div>
    )
}
export default Dialogs