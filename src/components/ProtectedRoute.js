import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Switch>
      <Route
        {...rest}
        render={(props) => {
          if (localStorage.getItem("token")) {
            // let path = { ...rest }.path;
            // if (path === "/login" || path === "/register") {
            //   return <Redirect to="/" />;
            // }

            return <Component {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </Switch>
  );
};

export default ProtectedRoute;
