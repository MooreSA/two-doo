/* eslint-disable react/prop-types */
import React from 'react';

const Sidebar = (props) => {
  const {
    projects, changeProject, activeIndex, addProject,
  } = props;

  return (
    <div className="sidebar">
      <button type="button" className="btn sidebar__new-project" onClick={addProject}>New Project</button>
      <div className="sidebar__projectlist">
        {/* map all the projects into buttons on the sidebar */}
        { projects.map((project, index) => {
          if (index === activeIndex) {
            // highlight the current project
            return (
              <button
                type="button"
                className="btn sidebar__project sidebar__project--active"
                data-project-id={index}
              >
                {project.title}
              </button>
            );
          }

          return (
            <button
              type="button"
              className="btn sidebar__project"
              data-project-id={index}
              onClick={changeProject}
            >
              {project.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
