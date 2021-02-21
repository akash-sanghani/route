import React from "react";
import ReactDOM from "react-dom";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import { MemoryRouter, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <MemoryRouter>
      <Switch>
        <Route exact path="/" component={PageOne}></Route>
        <Route path="/PageTwo" component={PageTwo}></Route>
      </Switch>
    </MemoryRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
