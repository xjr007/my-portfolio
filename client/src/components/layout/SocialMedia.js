import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../../App.css';

import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialMedia = () => {
	return (
		<div className='fixed-action-btn'>
			<div className='social-media'>
				<a
					rel='noopener noerferrer'
					href='https://instagram.com'
					target='_blank'
					className='soc insta'>
					<InstagramIcon style={largerIcons}></InstagramIcon>
				</a>
				<div></div>
				<a
					rel='noopener noerferrer'
					href='https://linkedin.com'
					className='soc link'
					target='_blank'>
					<LinkedInIcon style={largerIcons}></LinkedInIcon>
				</a>
				<div></div>
				<a
					rel='noopener noerferrer'
					href='https://github.com'
					className='soc git'
					target='_blank'>
					<GitHubIcon style={largerIcons}></GitHubIcon>
				</a>
			</div>
		</div>
		// <StickyContainer style={{ zIndex: 2 }}>
		// 	<Sticky>{social}</Sticky>
		// </StickyContainer>
	);
};

const largerIcons = {
	transform: 'scale(3)',
	margin: '20px',
};
export default SocialMedia;
