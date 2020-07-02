import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Landing from './components/pages/LandingPage';
import Contact from './components/pages/ContactPage';

import SocialComponent from './components/layout/SocialMedia';

function App() {
	return (
		<Fragment>
			<Router>
				<div className='App'>
					<Landing />
					<Route exact path='/' component={Landing} />
					<Route exact path='/contact' component={Contact} />
				</div>
			</Router>
			<SocialComponent />
		</Fragment>
	);
}

export default App;
