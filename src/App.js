import React, {useEffect,useState} from 'react';
import HomePage from './components/HomePage';
import Login from './components/Login';
import CourseView from './components/CourseView';
import Register from './components/Register';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CourseLayout from './components/CourseLayout';
import VideoStreamView from './components/learning/VideoStreamView';
import AddCourse from './components/AddCourse';


const App = () => {
  const [data,setData] = useState([]);
  
  useEffect(() => {
   fetch("http://127.0.0.1:8000/api/course/")
   .then(respose => respose.json())
   .then(data => setData(data))

  });

  return(
    <React.Fragment>
      <Router>
      <HomePage/>
    <Switch>
     <Route exact path="/"><CourseLayout data={data}/></Route>
     <Route exact path="/login"><Login/></Route>
      <Route exact path="/register"><Register/></Route>
      <Route exact path="/course/add"><AddCourse/></Route>
      <Route exact path="/Course/:id"><CourseView/></Route>
      <Route exact path="/Course/view"><VideoStreamView/></Route>
    </Switch>
    </Router>
    </React.Fragment>
  );
 
  
}

export default App;
