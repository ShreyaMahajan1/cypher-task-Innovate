import React, { useState, useEffect } from 'react';

const ProjectView = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  useEffect(() => {
    const fetchProjects = () => {
      setTimeout(() => {
        const dummyProjects = [
          {
            id: 1,
            name: 'Project A',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            createdBy: 'John Doe',
            deadline: '2024-03-20',
            tasks: [
              { id: 1, name: 'Task 1', description: 'Task 1 description', status: 'Pending' },
              { id: 2, name: 'Task 2', description: 'Task 2 description', status: 'Completed' },
            ],
          },
          {
            id: 2,
            name: 'Project B',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            createdBy: 'Jane Smith',
            deadline: '2024-03-25',
            tasks: [
              { id: 3, name: 'Task 3', description: 'Task 3 description', status: 'Pending' },
              { id: 4, name: 'Task 4', description: 'Task 4 description', status: 'In Progress' },
            ],
          },
        ];
        setProjects(dummyProjects);
        setLoading(false);
      }, 1000);
    };

    fetchProjects();
  }, []);

  const toggleExpand = (projectId) => {
    setExpandedProjectId((prevId) => (prevId === projectId ? null : projectId));
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
      <div className="project-view">
        <h2>Project View</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {projects?.map((project) => (
              <div className="card mb-3" key={project.id}>
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">Description: {project.description}</p>
                   <b> <p className="card-text mb-2">Deadline: {project.deadline}</p></b>
                    {expandedProjectId === project.id && (
                      <>
                        <b><p className="card-text mb-2">Created by: {project.createdBy}</p></b>
                        <h6>Tasks:</h6>
                        <ul className="list-group list-group-flush">
                          {project.tasks?.map((task) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={task.id}>
                              <span>{task.name}</span>
                              <span className={`badge bg-${task.status === 'Completed' ? 'success' : task.status === 'Pending' ? 'warning' : 'primary'}`}>{task.status}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  <button
                    className="btn btn-link"
                    onClick={() => toggleExpand(project.id)}
                  >
                    <i className={`bi bi-chevron-${expandedProjectId === project.id ? 'up' : 'down'}`}></i>
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </main>
  );
};

export default ProjectView;
