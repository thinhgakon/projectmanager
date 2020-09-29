import React from "react";
import { useSelector } from "react-redux";

const ProjectDetails = (props) => {
  const id = props.match.params.id;

  const projects = useSelector((state) => state.project.projects);
  const projectIndex = projects.findIndex((project) => project.id == id);
  const project = projects ? projects[projectIndex] : null;

  console.log("project:", project);
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Project...</p>
      </div>
    );
  }
};

export default ProjectDetails;
