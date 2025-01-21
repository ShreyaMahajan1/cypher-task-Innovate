import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskUpload = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [file, setFile] = useState(null);
  const [taskStatus, setTaskStatus] = useState('InProgress'); // Default value

  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      toast.error('Please select a file to upload');
      return;
    }

    setLoading(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      // Dummy success response
      toast.success('Task uploaded successfully!');
      setTaskName('');
      setTaskDescription('');
      setFile(null);
      setLoading(false);
    }, 1000); // Simulate 1 second delay
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (<main id="main" className="main">
  <div className="pagetitle">
    <h1>Upload Task</h1>
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="index.html">Project</a>
        </li>
        <li className="breadcrumb-item active">Upload Task</li>
      </ol>
    </nav>
  </div>
    <div>
      <h2>Upload Task</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="taskName" className="form-label">Task Name</label>
          <input
            type="text"
            className="form-control"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">Task Description</label>
          <textarea
            className="form-control"
            id="taskDescription"
            rows="3"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">Upload File</label>
          <input
            type="file"
            className="form-control"
            id="file"
            onChange={handleFileChange}
            required
          />
          <div id="fileHelp" className="form-text">Choose a file (.pdf, .zip, image, etc.)</div>
        </div>
        <div className="mb-3">
          <label htmlFor="taskStatus" className="form-label">Task Status</label>
          <select
            className="form-select"
            id="taskStatus"
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            required
          >
            <option value="InProgress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Task'}
        </button>
      </form>
    </div>
    </main>
  );
};

export default TaskUpload;
