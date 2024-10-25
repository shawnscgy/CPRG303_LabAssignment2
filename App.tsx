/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ToDoForm from './src/component/ToDoForm';
import ToDoList from './src/component/ToDoList';
import ClearBtn from './src/component/ClearBtn';

function App() {
  const [tasks, setTasks] = React.useState([
    {id : 0, text : "Do laundry", completed : true},
    {id : 1, text : "Go to gym", completed : false},
    {id : 2, text : "Walk dog", completed : true},
  ]);

  type itemType = {
    id : number;
    text : string;
    completed : boolean; 
  }
  function addTask(taskText : itemType) {
    setTasks([...tasks, taskText]);
  }
  function isCompleted(id: number) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      task.completed = !task.completed;
      setTasks([...tasks]);
    }
  }
 

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} isCompleted={isCompleted}/>
      <ToDoForm tasks={tasks} addTask={addTask}/>
      <ClearBtn tasks={tasks} setTasks={setTasks}/>
    </SafeAreaView>
  );
}

export default App;