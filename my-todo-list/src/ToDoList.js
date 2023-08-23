import React, { useState } from 'react';
import './ToDoList.css';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === '') {
      alert('Por favor, ingresa una tarea válida.');
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <header>
        <img src="logo.png" alt="Logo" className="logo" />
        <h3 className="titulo"><strong>Bienvenidos a My To Do List</strong></h3>
        <h1>La aplicación perfecta para mantenerse al día con todo.</h1>
      </header>
      <section>
        <div className="form">
          <input
            type="text"
            id="nuevaTarea"
            placeholder="Agregar una tarea"
            value={newTask}
            onChange={handleTaskChange}
          />
          <button id="agregarTarea" onClick={addTask}>Agregar tarea</button>
          <div id="tareasAgregadas">
            {tasks.map((task, index) => (
              <div className="tarea" key={index}>
                <span>{task}</span>
                <button onClick={() => removeTask(index)}>Eliminar</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer>
        <div className="footer">
          <p>Universidad del Norte - Curso en programación web front end</p>
          <p>
            <strong>
              &copy; 2023 Grupo 1 - Gino Torres - Francisco Heleodoro - Todos los
              derechos reservados
            </strong>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ToDoList;
