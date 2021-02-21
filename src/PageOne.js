import React from "react";
import { MemoryRouter, Switch, Link, Route } from "react-router-dom";

export default function PageOne() {
  return (
    <div>
      Page 1 <Link to="/PageTwo">Go to page2</Link>
    </div>
  );
}
