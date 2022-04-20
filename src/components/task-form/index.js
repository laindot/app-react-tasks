import React, { useState } from 'react';
import './styles.css';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleOnChange = e => {
    setText(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const newTask = {
      Id: uuidv4(),
      text: text,
      isComplete: false,
    };
    onSubmit(newTask);
  };

  return (
    <form className='task-form' onSubmit={handleOnSubmit}>
      <input
        className='task-input'
        type='text'
        placeholder='Insert Task'
        name='text'
        onChange={handleOnChange}
      />

      <button className='task-button'>Add Task</button>
    </form>
  );
};

export default TaskForm;
