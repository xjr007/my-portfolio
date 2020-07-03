import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './components/pages/LandingPage';
import Contact from './components/pages/ContactPage';
import About from './components/pages/AboutPage';
import Project from './components/pages/ProjectPage';

import SocialComponent from './components/layout/SocialMedia';

import './App.css';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/my-portfolio/' component={Landing} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/about' component={About} />
					<Route exact path='/projects' component={Project} />
				</Switch>
				<SocialComponent />
			</div>
		</Router>
	);
};

export default App;
