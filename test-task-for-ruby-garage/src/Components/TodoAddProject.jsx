import '../css/form.css';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import addProject from '../firebase/addProjectToDb';

const TodoAddProject = ({userUid}) => {
    const [name, setName] = useState('');
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addProject(userUid, name);
            setName('');
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
