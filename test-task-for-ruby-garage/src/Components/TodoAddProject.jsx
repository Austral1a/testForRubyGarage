import '../css/form.css';
import firebase from 'firebase';
import React, {useState} from 'react';
import writeNewProject from '../firebase/addProjectToDb';
import PropTypes from 'prop-types';


const TodoAddProject = ({userUid}) => {
    const [name, setName] = useState('');
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            writeNewProject(userUid, name, firebase);
        }}>
            <input 
                type="text" 
                required 
                placeholder="Enter a project name" 
                onChange={(e) => setName(e.target.value)} 
                value={name} />
            <button type="submit" className="btn-add-todo"><h3>ADD PROJECT</h3></button>
        </form>
    );
};

export default TodoAddProject;
