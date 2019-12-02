import React from "react";
import { Router, Route } from "react-router-dom";
import { createHashHistory } from "history";
import Home from "../views/Home";
import Login from '../views/Login';
import CinemaTicket from '../views/CinemaTicket';
import Cinema from '../views/Cinema';
import Purchase from '../views/Purchase';
import MovieDetail from '../views/MovieDetail';

const history = createHashHistory();

export default class App extends React.Component {
  render() {
    return (
			<Router history={history}>
				<Route exact={true} path="/" component={Home} />
				<Route exact={true} path="/login" component={Login} />
				<Route exact={true} path="/cinematicket" component={CinemaTicket} />
				<Route exact={true} path="/cinema" component={Cinema} />
				<Route exact={true} path="/purchase" component={Purchase} />
				<Route exact={true} path="/moviedetail" component={MovieDetail} />
			</Router>
	  
	);
  }
}