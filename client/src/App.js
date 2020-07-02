import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Landing from './components/pages/LandingPage';
import Contact from './components/pages/ContactPage';

import SocialComponent from './components/layout/SocialMedia';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/contact' component={Contact} />
			</Switch>
			<SocialComponent />
		</Router>
	);
};

export default App;
