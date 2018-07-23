import React from 'react';
import moment from 'moment';

const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
			const startdate = moment(item.startDate).format('MMM YYYY');
			if ((moment(item.endDate)).isAfter())
					var enddate = moment(item.endDate).format('MMM YYYY') + ' (Expected)';
			else
					var enddate = moment(item.endDate).format('MMM YYYY');

			const courses = item.courses.join(', ');
  		return (
          <div key={index}>
            <h3>{item.studyType} - {item.area} ({item.institution})</h3>
						<p className="educationDates">{startdate} - {enddate}</p>
	          <p>Cumulative GPA: {item.gpa} | Major GPA: {item.majorGpa}</p>
						<p>Coursework: {courses}</p>
  				</div>
        )
  	});

  	return (
  	  <section className="education">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> Education</h2>
        {getEducation}
      </section>
  	)
};

export default Education;
