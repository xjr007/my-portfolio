import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialMedia = () => {
	return (
		<div className='fixed-action-btn'>
			<div className='social-media-style'>
				<a
					rel='noopener noreferrer'
					href='https://www.instagram.com/aaqiel_behardien/'
					target='_blank'
					className='soc insta'>
					<InstagramIcon style={largerIcons}></InstagramIcon>
				</a>
				<div></div>
				<a
					rel='noopener noreferrer'
					href='https://www.linkedin.com/in/aaqiel-behardien-53a2aa161/'
					className='soc link'
					target='_blank'>
					<LinkedInIcon style={largerIcons}></LinkedInIcon>
				</a>
				<div></div>
				<a
					rel='noopener noreferrer'
					href='https://github.com/xjr007'
					className='soc git'
					target='_blank'>
					<GitHubIcon style={largerIcons}></GitHubIcon>
				</a>
			</div>
		</div>
	);
};

const largerIcons = {
	transform: 'scale(3)',
	margin: '20px',
};
export default SocialMedia;
