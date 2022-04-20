import React, { useState } from 'react';
import TaskForm from '../components/task-form';
import ListItem from '../components/list-item';
import './styles.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    console.log(task.text);
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  };

  const handleDeleteTask = Id => {
    const updatedTasks = tasks.filter(task => task.Id !== Id);
    setTasks(updatedTasks);
  };

  const handleCompleteTask = Id => {
    const updatedTasks = tasks.map(task => {
      if (task.Id === Id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='list-container'>
        {tasks.map(task => (
          <ListItem
            key={task.Id}
            Id={task.Id}
            text={task.text}
            isComplete={task.isComplete}
            deleteTask={handleDeleteTask}
            completeTask={handleCompleteTask}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
