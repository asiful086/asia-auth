import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  useEffect(() => {
    localStorage.getItem("token") &&
      console.log("call the refresh token for the user"); // have to call an api to get the current loggedin user
  }, []);
  return (
    <div>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route
          path="/register"
          render={() =>
            !localStorage.getItem("token") ? <Register /> : <Redirect to="/" />
          }
        />
        <Route
          path="/login"
          render={() =>
            !localStorage.getItem("token") ? <Login /> : <Redirect to="/" />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
