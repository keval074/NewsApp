// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import React ,{useState} from "react";
import News from "./components/News";
// import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App=()=>{
  const pageSize = 15
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);

    return (
      <Router>
      <div>
        <Navbar />
        <LoadingBar
          progress={progress}
          height={3}
          color='#FFEEEE'
        />
        <Switch>
          <Route exact path="/">
          <News setProgress={setProgress}  apiKey = {apiKey}    key="general"pageSize={pageSize} country="in" category="General"/>
          </Route>
          {/* <Route exact path="/Buiseness">
          <News setProgress={setProgress}  apiKey = {apiKey}    key="Buiseness"pageSize={pageSize} country="in" category="Buiseness"/>
          </Route>
          <Route exact path="/Entertainement">
          <News setProgress={setProgress}  apiKey = {apiKey}    key="Entertainement"pageSize={pageSize} country="in" category="Entertainement"/>
          </Route>
          <Route exact path="/General">
          <News setProgress={setProgress}  apiKey = {apiKey}    key="General"pageSize={pageSize} country="in" category="General"/>
          </Route> */}
          <Route exact path="/Health">
          <News setProgress={setProgress}  apiKey = {apiKey}    key="Health"pageSize={pageSize} country="in" category="Health"/>
          </Route>
          <Route exact path="/Science">
          <News setProgress={setProgress}  apiKey = {apiKey}    key="Science"pageSize={pageSize} country="in" category="Science"/>
          </Route>
          <Route exact path="/Sports">
          <News setProgress={setProgress}  apiKey = {apiKey}    key="Sports"pageSize={pageSize} country="in" category="Sports"/>
          </Route>
          <Route exact path="/Technology">
          <News setProgress={setProgress}  apiKey = {apiKey}    key="Technology"pageSize={pageSize} country="in" category="Technology"/>6         
          </Route>
        </Switch>
      </div>
      </Router>
    );
  
}
export default App 