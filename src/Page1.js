import "./App.css";
import React from "react";

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dname: "",
    };
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleDname = (e) => {
    this.setState({
      dname: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="page-bar">
          <div className="circles circle-color">1</div>
          <div className="line1 line1-color"></div>
          <div className="line2"></div>
          <div className="circles">2</div>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="circles">3</div>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="circles">4</div>
        </div>
        <div className="heading" align="center">
          <h1 className="welcome-note">Welcome! First things first...</h1>
          <h3 className="info">You can also change them later.</h3>
          <div className="form-container2">
            <form onSubmit={this.props.onSubmit}>
              <label className="Name-label">Full Name</label>
              <br />
              <input
                type="text"
                placeholder="Steve Jobs"
                className="name"
                value={this.state.name}
                onChange={this.handleName}
              ></input>
              <br />
              <label className="DName-label">Display Name</label>
              <br />
              <input
                type="text"
                placeholder="Steve"
                className="name"
                value={this.state.dname}
                onChange={this.handleDname}
              ></input>
              <br />
              <input
                className="submit"
                type="submit"
                value="Create Workspace"
              ></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Page1;
