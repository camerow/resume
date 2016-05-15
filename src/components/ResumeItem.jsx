import React from "react";

const ResumeItem = (props) => {
  const { details } = props;

  return (
    <div>
      {
        details.map((detail, i) => {
        const { company, location, title, startDate, endDate, roles} = detail;

        return (
          <div key={i} className="row">
            <div style={{paddingLeft: 0}} className="medium-4 columns">
              <h3>{company}</h3>
              <p>{location}</p>
              <p>{`${startDate} - ${endDate}`}</p>

            </div>
            <div className="medium-8 columns">
              <h4>{title}</h4>
              <ul>
                {
                  roles.map((role, i) => <li key={i} className="resume-item">{role}</li>)
                }
              </ul>
            </div>
          </div>
        )
      })
    }
    </div>
  )
}

export default ResumeItem;
