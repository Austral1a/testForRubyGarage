import {setTaskIsChangeNameOpenFalse} from '../../firebase/setTaskChangeName';
import textInputValidator from '../../validators/inputText';
import sumbitTaskChangeName from '../../firebase/submitTaskChangeName'; 
import React,{useState} from 'react';

const ChangeNameTask = ({uid, taskId, taskPrevName}) => {
    const [newName, setNewName] = useState(taskPrevName);
    const handleSubmit = () => {
        if(!textInputValidator(newName)) {
            sumbitTaskChangeName(uid, taskId, newName);
            setTaskIsChangeNameOpenFalse(uid, taskId);
        };
    };
    return (
        <div className="change-name-wrap">
            <input 
                style={{borderBottomColor: textInputValidator(newName) ? 'red' : null,
                        borderBottomWidth: '3px'}}
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}/>
            <button onClick={handleSubmit} className="btn btn-change-name"><h3>Change!</h3></button>
            <button onClick={() => setTaskIsChangeNameOpenFalse(uid, taskId)} className="btn-icon btn-close"><span className="material-icons">remove_circle</span></button>
        </div>
    )
};

export default ChangeNameTask;
