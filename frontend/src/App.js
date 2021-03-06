import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/pages/Home";
import aboutus from "./Components/pages/aboutus";
import aman from "./Components/pages/aman";
import kaji from "./Components/pages/kaji";
import khadka from "./Components/pages/khadka";
import team from "./Components/pages/team";
import AdminLogin from "./Components/admin/AdminLogin";
import AdminPage from "./Components/admin/AdminPage";
import PublicRoute from "./utils/PublicRoute";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" exact component={aboutus} />
        <Route path="/aman" exact component={aman} />
        <Route path="/kaji" exact component={kaji} />
        <Route path="/khadka" exact component={khadka} />
        <Route path="/team" exact component={team} />
        <PublicRoute path="/AdminLogin" exact component={AdminLogin} />
        <PrivateRoute path="/AdminPage" exact component={AdminPage} />
      </Switch>
    </Router>
  );
}

export default App;
