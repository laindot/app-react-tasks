import React from 'react';
import './styles.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ListItem = ({ Id, text, isComplete, completeTask, deleteTask }) => {
  return (
    <div className={isComplete ? 'container complete ' : 'container'}>
      <div className='task-text' onClick={() => completeTask(Id)}>
        {text}
      </div>
      <div className='task-icon-container' onClick={() => deleteTask(Id)}>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  );
};

export default ListItem;
