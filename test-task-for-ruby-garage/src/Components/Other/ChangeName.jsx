import textInputValidator from '../../validators/inputText';
import React, {useState, useEffect} from 'react';
import '../../css/changeName.css';
import {setProjectIsChangeNameOpenFalse} from '../../firebase/setProjectChangeName';
import sumbitProjectChangeName from '../../firebase/submitProjectChangeName';

const ChangeName = ({uid, projectId, projectPrevName}) => {
    const [newName, setNewName] = useState(projectPrevName);
    const handleSubmit = () => {
        if(!textInputValidator(newName)) {
            sumbitProjectChangeName(uid, projectId, newName);
            setProjectIsChangeNameOpenFalse(uid, projectId);
        }
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
            <button onClick={() => setProjectIsChangeNameOpenFalse(uid, projectId)} className="btn-icon btn-close"><span className="material-icons">remove_circle</span></button>
        </div>
    )
};

export default ChangeName;
