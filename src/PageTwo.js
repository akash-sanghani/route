import React from "react";
import { Redirect } from "react-router-dom";
import PageThree from "./PageThree";

class PageTwo extends React.Component {
  state = { counter: 0 };
  render() {
    return (
      <div>
        Page 2
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Click
        </button>
        {this.state.counter == 5 ? <Redirect to="/" /> : <PageThree />}
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
export default PageTwo;
