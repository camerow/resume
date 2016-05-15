import React, { Component } from "react";

class RevealPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  render() {
    const { title } = this.props;
    const { visible } = this.state;
    return (
      <div className="medium-7 columns">
        <div
          style={{justifyContent: "space-between"}}
          onClick={(e) => { this.setState({ visible: !visible })}}
          className="row row-divider">

          <h2 className="pop-orange">{title}</h2>
          <div className={"down-arrow" + (visible ? " rec " : "")}></div>
        </div>
        {
          visible ?
          this.props.children
          :
          null
        }
      </div>
    );
  }
}
export default RevealPanel;
