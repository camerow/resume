import React, { Component } from "react";

class FloatingNav extends Component {
  constructor() {
    super();
    this.state = {
      stickyStyle: {
        border: "solid black 2px",
        marginLeft: "20px"
      }
    }
  }
  getNavLocation() {
    let navLoc = this.floatingNav.getBoundingClientRect();

    if (navLoc.top <= 0) {
      this.setState({
        onTop: true,
        stickyStyle: {
          top: "0px",
          position: "fixed",
          zIndex: "99",
          maxWidth:"80px",
          marginLeft: "20px",
          border: "solid black 2px"
        }
      });
    }
    if (window.pageYOffset < 51) {
      this.setState({
        stickyStyle: {
          border: "solid black 2px",
          marginLeft: "20px"
        }
      })
    }
  }
  componentWillMount() {
    window.addEventListener("scroll", this.getNavLocation.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.getNavLocation.bind(this))
  }
  render() {
    let { stickyStyle } = this.state;
    return (
      <div className="row">
        <div ref={ (ref) => this.floatingNav = ref } className="floating-nav" style={stickyStyle}>
          <div style={{width: "100%"}}>
            <div><button className="menu-button">about</button></div>
            <div><button>something</button></div>
            <div><button>contact</button></div>
          </div>
        </div>
      </div>
    )
  }
}
export default FloatingNav;
