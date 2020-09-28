import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "../pages/Register.js";

const App = () => {
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/login" component={Register} />
      </Switch>
    </Layout>
  </BrowserRouter>;
};

export default App;
