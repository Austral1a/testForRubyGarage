import '../css/form.css';
import textInputValidator from '../validators/inputText';
import React, {useState} from 'react';
import addProject from '../firebase/addProjectToDb';

const TodoAddProject = ({userUid}) => {
    const [name, setName] = useState('');
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if(!textInputValidator(name)) {
                addProject(userUid, name);
                setName('');   
            }
        }}>
            <input 
                type="text" 
                required 
                placeholder="Enter a project name" 
                style={{borderBottomColor: textInputValidator(name) ? 'red' : null}}
                onChange={(e) => setName(e.target.value)} 
                value={name} />
            <button type="submit" className="btn-add-todo"><h3>ADD PROJECT</h3></button>
        </form>
    );
};

export default TodoAddProject;
