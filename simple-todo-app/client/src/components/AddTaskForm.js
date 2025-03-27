import React, { useState, useContext } from 'react';
import TaskContext from '../context/TaskContext';

const AddTaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError('Please fill in both title and description.');
      return;
    }

    if (title.length < 3) {
      setError('Title must be at least 3 characters long.');
      return;
    }

    if (description.length < 5) {
      setError('Description must be at least 5 characters long.');
      return;
    }

    addTask({ title, description, completed: false });
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
