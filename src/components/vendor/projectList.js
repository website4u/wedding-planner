"use client";

import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
