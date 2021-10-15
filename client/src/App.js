import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";

import store from "./stores";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
	return (
		<>
			<Provider store={store}>
				<Router>
					<Switch>
						<Route path="/edit/:id">
							<Edit />
						</Route>
						<Route path="/add">
							<Add />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/">
							<Login />
						</Route>
					</Switch>
				</Router>
			</Provider>
		</>
	);
}

export default App;
