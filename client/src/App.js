import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Dashboard";
import Login from './views/Login';
import Marks from './views/Marks';
import StudentRegistration from './views/StudentRegistration';
import TeacherRegistration from './views/TeacherRegistration';
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <Switch>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/marks" component={Marks} />
          <Route exact path="/student-registration" component={StudentRegistration} />
          <Route exact path="/teacher-registration" component={TeacherRegistration} />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
