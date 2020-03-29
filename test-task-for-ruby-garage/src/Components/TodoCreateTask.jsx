import '../css/components/btn.css'
import addTodoToDb from '../firebase/addTodoToDb';
import React, {useState} from 'react';

const TodoCreateTask = ({src, projectId, uid}) => {
    const [name, setName] = useState('');
    const handleClick = () => {
        addTodoToDb(src, projectId, uid, name);
        setName('');
    }
    return (
        <div className="todo-header_create-task">
            <span className="material-icons">add</span>
            <input 
                type="text"
                required
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }} />
            <button 
            onClick={handleClick} 
            className="btn">ADD</button>
        </div>
    );
};

export default TodoCreateTask;