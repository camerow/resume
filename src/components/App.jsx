/* jshint esnext:true */
import React, { Component } from "react";
import { careers, about, education } from "../resume";
import RevealPanel from "./RevealPanel";
import ResumeItem from "./ResumeItem";
import ReactMarkdown from "react-markdown";
require("../public/styles/app.css");
require("../public/styles/foundation.min.css");
let profile = require("../public/img/profile.jpg");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <div className="column row">
        <div style={{minHeight: "500px"}} className="row medium-unstack">
          <div style={{marginTop: "1vh"}} className="medium-5 columns">
            <img
              style={{
                width: '50%',
                borderRadius: "100px"
              }}
              src={profile} />
            <h1 className="pop-orange" style={{marginBottom: 0}}>
              Will Cameron
            </h1>
            <h4>Full-Stack Developer</h4>
            <a href="mailto:cameron.will@gmail.com" target="_top">cameron.will@gmail.com</a>
            <br/>
            <a href="http://zwt.co/sms?t=3608011453&body=Hey%20Will%21">(360) 801-1453</a>
          </div>

          <div className="columns">
            <RevealPanel defaultVisible title={"About"}>
              <div className="row">{about}</div>
            </RevealPanel>
            <RevealPanel title={"Education"}>
              <ResumeItem {...education} />
            </RevealPanel>
            <RevealPanel title={"Highlights"}>
              <div className="row">
                <div style={{paddingLeft: 0}} className="medium-6 columns">
                  <h4>Strengths:</h4>
                  <ul>
                    <li>Javascript (React.js, Node)</li>
                    <li>Webpack, Gulp, Grunt</li>
                    <li>NoSQL Databases: <br></br> (Rethink, Mongo, Firebase)</li>
                    <li>SASS/CSS</li>
                    <li>Git</li>
                  </ul>
                </div>
                <div className="medium-6 columns">
                  <h4>Learning:</h4>
                  <ul>
                    <li>Functional Programming</li>
                    <li>Elm, Elixir</li>
                    <li>Observables (Rxjs)</li>
                    <li>Relational Databases</li>
                    <li>Docker/Deployment</li>
                  </ul>
                </div>
              </div>
            </RevealPanel>
            <RevealPanel title={careers.category}>
              <ResumeItem {...careers} />
            </RevealPanel>

          </div>

        </div>
        <div style={{textAlign:"center"}} className="row text-center">
            <ReactMarkdown source={"Built in React.js with easy ```$git push``` to Docker on DigitalOcean."} />
        </div>
    </div>

    );
  }
}



export default App;
