import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
	CONTACT_PAGE,
	PROJECT_PAGE,
	RESUME_PAGE,
	REVIEWS_PAGE,
} from './components/layout/links/Links';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Landing from './components/pages/LandingPage';
import Contact from './components/pages/ContactPage';
import Project from './components/pages/ProjectPage';
import Reviews from './components/pages/ReviewPage';
import Resume from './components/pages/Resume';

import SocialComponent from './components/layout/SocialMedia';

import './App.css';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/my-portfolio/' component={Landing} />
					<Route exact path={CONTACT_PAGE} component={Contact} />
					<Route exact path={PROJECT_PAGE} component={Project} />
					<Route exact path={REVIEWS_PAGE} component={Reviews} />
					<Route exact path={RESUME_PAGE} component={Resume} />
				</Switch>
				<SocialComponent />
			</div>
		</Router>
	);
};

export default App;
