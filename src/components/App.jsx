/* jshint esnext:true */
import React from "react";
import BackgroundImageHeader from "./BackgroundImageHeader";
import FloatingNav from "./FloatingNav";
// require("../public/styles/normalize.css");
require("../public/styles/app.css");
require("../public/styles/foundation.min.css");
import { careers } from "../resume";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <div className="container">
          <div className="row medium-unstack align-justify">

            <div className="medium-5 columns align-self-top">
              <h1 className="">Will Cameron</h1>
              <h4>Full-Stack Developer</h4>
            </div>
            <ResumeItem
              toggle={(e) => this.setState({ show: !this.state.show })}
              showDetails={this.state.show}
              {...careers}
              />

          </div>
        <div style={{minHeight: "800px"}}></div>
      </div>

    );
  }
}

const ResumeItem = (props) => {
  const { category, details, toggle, showDetails } = props;

  return (
    <div className="medium-7 columns">
      <div style={{justifyContent: "space-between"}} onClick={toggle} className="row row-divider">
        <h2>{category}</h2>
        <div className={"down-arrow" + (showDetails ? " rec " : "")}></div>
      </div>
      { showDetails ?
        details.map((detail, i) => {
          const { company, location, title, startDate, endDate, roles} = detail;

          return (
            <div key={i} className="row">
              <div className="medium-4 columns">
                <h3>{company}</h3>
                <p>{location}</p>
                <p>{`${startDate} - ${endDate}`}</p>

              </div>
              <div className="medium-8 columns">
                <h4>{title}</h4>
                <ul style={{listStyle: "none"}}>
                  {
                    roles.map((role) => <li>{role}</li>)
                  }
                </ul>
              </div>
            </div>
          )
        })
        :
        null
      }


    </div>
  )
}

export default App;
