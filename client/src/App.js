import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="relative min-h-screen md:flex">
    <Sidebar />
    <div className="flex-1 p-10 text-2xl">All Content</div>
      {/* <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch> */}
    </div>
  );
}

export default App;
