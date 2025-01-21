import React, { useState, useEffect } from 'react';

const TaskView = () => {
  const [tasks, setTasks] = useState([]);
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API after 1 second
    setTimeout(() => {
      const dummyTasks = [
        { id: 1, name: 'Task 1', description: 'Task 1 description', status: 'Pending', projectId: 1, dueDate: '2024-03-20' },
        { id: 2, name: 'Task 2', description: 'Task 2 description', status: 'Completed', projectId: 1, dueDate: '2024-03-22' },
        { id: 3, name: 'Task 3', description: 'Task 3 description', status: 'In Progress', projectId: 2, dueDate: '2024-03-25' },
        { id: 4, name: 'Task 4', description: 'Task 4 description', status: 'Pending', projectId: 2, dueDate: '2024-03-28' },
      ];
      setTasks(dummyTasks);
    }, 1000); // 1 second delay
  }, []); // Empty dependency array means this effect runs only once

  const toggleExpand = (taskId) => {
    setExpandedTaskId((prevId) => (prevId === taskId ? null : taskId));
  };

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Manage Task</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Task</a>
            </li>
            <li className="breadcrumb-item active">Manage Task</li>
          </ol>
        </nav>
      </div>
      <div className="task-view">
        <h2>Task View</h2>
        {tasks?.map((task) => (
          <div className="card mb-3" key={task.id}>
            <div className="card-body">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h5 className="card-title">{task.name}</h5>
                  <p className="card-text">Description: {task.description}</p>
                  {expandedTaskId === task.id && (
                    <>
                      <span>Status : </span>
                      <span className={`badge bg-${task.status === 'Completed' ? 'success' : task.status === 'Pending' ? 'warning' : 'primary'} mb-4`}>{task.status}</span>
                            
                      <b><p className="card-text">Due Date: {task.dueDate}</p></b>
                    </>
                  )}
                </div>
                <button
                  className="btn btn-link"
                  onClick={() => toggleExpand(task.id)}
                >
                  <i className={`bi bi-chevron-${expandedTaskId === task.id ? 'up' : 'down'}`}></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TaskView;
