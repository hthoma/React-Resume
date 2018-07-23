import React from 'react';
import moment from 'moment';

const ProjectItem = props => {
    const getProjectDates = () => {
        if (props.projectItemData.startDate === props.projectItemData.endDate)
            return <span className='startdate'>{props.projectItemData.startDate}</span>
        else
            return <span className='startdate'>{props.projectItemData.startDate} - {props.projectItemData.endDate}</span>
    }

    const getHighlights = props.projectItemData.highlights.map(function(item, index) {
        return (<li key={index}>{item}</li>)
    });

    return (
        <div className="projectItem">
          <h3><a className="projectLinks" href={props.projectItemData.website}>{props.projectItemData.project}</a></h3>
          <p className="projectDates">{getProjectDates()}</p>
          <p>{props.projectItemData.summary}</p>
          <ul>{getHighlights}</ul>
        </div>
    )
};

export default ProjectItem;
