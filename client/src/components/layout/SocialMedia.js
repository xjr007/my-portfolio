import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import 'materialize-css/dist/css/materialize.min.css';
import styled from 'styled-components';
import '../../App.css';

import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialMedia = () => {
	const onClick = () => {};
	return (
		<div className='fixed-action-btn'>
			<div className='social-media'>
				<div className='soc insta'>
					<InstagramIcon style={largerIcons}></InstagramIcon>
				</div>
				<div className='soc link'>
					<LinkedInIcon style={largerIcons}></LinkedInIcon>
				</div>
				<div className='soc git'>
					<GitHubIcon style={largerIcons}></GitHubIcon>
				</div>
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
