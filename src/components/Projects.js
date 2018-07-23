import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = props => {
    const getProjectExperience = () => {
        const projectItems = [];
        props.projectData.forEach((val, index) => {
          projectItems.push(<ProjectItem key={index} projectItemData={val}/>);
        })
        return projectItems;
    }

    return (
      <section className="project">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-file-code-o"></i> Project experience</h2>
        {getProjectExperience()}
      </section>
    );
};

export default Projects;
