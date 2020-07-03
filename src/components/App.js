import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";

import NotFound from "../views/NotFound";

import routes from "../routes.js";

import "./App.css";

const App = () => (
  <Layout>
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}

          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  </Layout>
);

export default App;
