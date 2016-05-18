import React from "react";

const ResumeItem = (props) => {
  const { details } = props;

  return (
    <div>
      {
        (details || []).map((detail, i) => {
        const { company, location, title, name, startDate, endDate, details} = detail;

        return (
          <div key={i} className="row">
            <div style={{paddingLeft: 0}} className="medium-5 columns">
              <h3>{name}</h3>
              <p>{location}</p>
              <p>{`${startDate} - ${endDate}`}</p>

            </div>
            <div className="medium-7 columns">
              <h4>{title}</h4>
              <ul>
                {
                  details.map((role, i) => <li key={i} className="resume-item">{role}</li>)
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
