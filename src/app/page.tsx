'use client';

import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎀 Minha Lista de Tarefas</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma tarefa..."
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>Adicionar</button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            style={{
              ...styles.listItem,
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#d63384' : '#000000' // Rosa escuro quando concluído, preto quando pendente
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    border: '2px solid #f8c2d1',
    borderRadius: '10px',
    backgroundColor: '#ffe6f0',//rosa claro
    textAlign: 'center' as const,
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    marginBottom: '20px',
    color: '#d63384',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    width: '70%',
    border: '1px solid #f8c2d1',
    borderRadius: '5px 0 0 5px',
    outline: 'none',
    backgroundColor: '#fff0f5',
    color: '#000',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#f8c2d1', //bordas
    color: '#000',
    cursor: 'pointer',
    borderRadius: '0 5px 5px 0',
    fontWeight: 'bold' as const,
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #f8c2d1',
    cursor: 'pointer',
  },
};
