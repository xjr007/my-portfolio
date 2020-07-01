import React, { Fragment } from 'react';
import './App.css';

import LandingPage from './components/pages/LandingPage';
import SocialMedia from './components/layout/SocialMedia';

function App() {
	return (
		<Fragment>
			<LandingPage />
			<SocialMedia />
		</Fragment>
	);
}

export default App;
