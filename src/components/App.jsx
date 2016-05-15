/* jshint esnext:true */
import React, { Component } from "react";
import { careers } from "../resume";
import RevealPanel from "./RevealPanel";
import ResumeItem from "./ResumeItem";
require("../public/styles/app.css");
require("../public/styles/foundation.min.css");

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
              <h1 className="pop-orange" style={{marginBottom: 0}}>Will Cameron</h1>
              <h4>Full-Stack Developer</h4>
              <h4 style={{marginTop:"20px"}}>Strengths:</h4>
              <ul>
                <li>Javascript (React.js, Node)</li>
                <li>Webpack, Gulp, Grunt</li>
                <li>NoSQL Databases <br></br> (Rethink, Mongo, Firebase)</li>
                <li>SASS/CSS</li>
                <li>Git</li>
              </ul>
              <h4 style={{marginTop:"20px"}}>Learning:</h4>
              <ul>
                <li>Relational Databasees</li>
                <li>Elm, Elixir</li>
                <li>Docker/Deployment</li>
              </ul>

            </div>
            <RevealPanel title={careers.category}>
              <ResumeItem {...careers} />
            </RevealPanel>

          </div>
        <div style={{minHeight: "800px"}}></div>
      </div>

    );
  }
}



export default App;
