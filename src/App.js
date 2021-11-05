import axios from "axios";
import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Characters from "./Components/Characters/Characters";
import Episodes from "./Components/Episodes/Episodes";
import Locations from "./Components/Locations/Locations";
import Menu from "./Components/Menu/Menu";
import MyWatchList from "./Components/MyWatchList/MyWatchList";

import NotFound from "./Components/NotFound";
function App() {
  return <>
   {/* <Characters/> */}
        <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/characters" component={Characters} />
        <Route path="/episodes" component={Episodes} />
        <Route path="/locations" component={Locations} />
        <Route path="/list" component={MyWatchList} />
        <Route component={NotFound} />
      </Switch>
  </>;
}

export default App;
