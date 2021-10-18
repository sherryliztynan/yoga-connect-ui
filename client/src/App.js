import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ErrorPage from './pages/errorpage/errorpage'
import YogaTeachersPage from './pages/yogateacherspage/yogateacherspage'
import ContactYogaTeacher from './pages/contactyogateacherpage/contactyogateacherpage'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/YogaTeachers/:teacherId" component={ContactYogaTeacher} />
          <Route exact path="/" component={YogaTeachersPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
