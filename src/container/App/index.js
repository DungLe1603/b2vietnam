import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Homepage from '../HomePage';
import IT from "../InformationTechnology/index";
import Profile from '../../container/Profile/index';
import Agriculture from '../Agriculture/index';
import Apparel from '../Apparel';
import showForm from '../../container/Profile/formTranslaters'
import showLists from '../../container/showList/showList'
import personalInfo from '../../container/TranslaterInfo/translaterInfor'
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/profile" component={Profile} />
      <Route path="/information-technology" component={IT} />
      <Route path="/agriculture" component={Agriculture} />
      <Route path="/apparel" component={Apparel} />
      <Route path="/form" component={showForm} />
      <Route path="/list" component={showLists} />
      <Route path="/info" component={personalInfo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
