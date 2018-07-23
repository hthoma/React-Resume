import React from 'react';
import ReactTooltip from 'react-tooltip'

const ResumeDownloads = props => {
    const resumeDownloadObj = props.resumeDownloadData;
    return <div>
    <h3 className="text-center">Alternate Formats  <i className="fa fa-external-link fa-x"/> </h3>
    <div className='divider'/>
    <ul className="profileLinks list-inline text-center" >
    <li><a data-tip="PDF" className="fa fa-lg fa-file-pdf-o fa-2x" href="../resume.pdf"/></li>
    <li><a data-tip="Google Doc" className="fa fa-lg fa-file-word-o fa-2x" href="https://docs.google.com/document/d/1kqooxEG4YobORLcbagXsG2Tw07PQEe8EETrS19uY5aA/edit?usp=sharing"/></li>
    <li><a data-tip="JSON" className="fa fa-lg fa-file-code-o fa-2x" href="../resume.json" /></li>
    </ul>
    <ReactTooltip delayShow={100} />
    </div>

};

export default ResumeDownloads;
