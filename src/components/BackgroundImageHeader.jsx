import React from "react";
let beach = require("../public/img/beach.jpg");
let coffee = require("../public/img/coffee.jpg");
let rollingHills = require("../public/img/rolling-hills.jpg");
const images = [beach, coffee, rollingHills ];

class BackgroundImageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      bgImage: beach
    }
  }
  handleResize(e) {
    console.log("RESIZE");
    this.setState({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    })
  }
  componentWillMount() {
    this.setState({
      bgImage: images[ Math.floor(Math.random() * images.length) ]
    })
    window.addEventListener("resize", this.handleResize.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this))
  }
  render() {
    let { innerWidth, innerHeight, bgImage } = this.state;
    return (
      <div className="container" style={{
          backgroundImage: "url(" + beach +")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: innerWidth,
          height: innerHeight}}>
        {this.props.children}
      </div>

    );
  }
}

export default BackgroundImageHeader;
