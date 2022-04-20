import './App.css';
import TaskList from './task-list';

function App() {
  return (
    <div className='app-tasks'>
      <div className='task-list'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
