import React from 'react';

const TodoHeader = ({projectName}) => {
    return (
        <div className="todo-header_name">
            <h3>{projectName}</h3>
        </div>
    );
};

export default TodoHeader;