import React, { Fragment } from 'react';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkIcon from '@material-ui/icons/Link';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import TerrainIcon from '@material-ui/icons/Terrain';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import Navbar from '../layout/Navbar';

const Resume = () => {
	return (
		<Fragment>
			<Navbar />
			<div className='resume-layout'>
				<div
					className='resume '
					style={{ position: 'absolute', left: '10%', top: '15%' }}>
					<div className='resume-left'>
						<div className='resume-profile'>
							<PersonOutlineIcon
								alt='avatar'
								style={{
									fontSize: '150px',
									position: 'relative',
									left: '20%',
									top: '40%',
									color: 'white',
								}}
							/>
						</div>
						<div className='resume-content'>
							<div className='resume-item resume-info'>
								<div className='title'>
									<p className='bold'>Aaqiel Behardien</p>
									<p className='regular'>Programmer</p>
								</div>
								<ul>
									<li>
										<div className='icon'>
											<RoomIcon className='icon-obj' />
										</div>

										<div className='data'>
											48 Derby Road, Lansdowne <br /> SA
										</div>
									</li>
									<li>
										<div className='icon'>
											<PhoneIcon className='icon-obj' />
										</div>

										<div className='data'>081 564 3390</div>
									</li>
									<li>
										<div className='icon'>
											<MailOutlineIcon className='icon-obj' />
										</div>

										<div className='data'>
											<p>
												abaaqielbehardien@
												<br />
												gmail.com
											</p>
										</div>
									</li>
									<li>
										<div className='icon'>
											<LinkIcon className='icon-obj' />
										</div>

										<div className='data'>link here</div>
									</li>
								</ul>
							</div>
							<div className='resume-item resume-skills'>
								<div className='title'>
									<p className='bold'>Skills</p>
								</div>
								<ul>
									<li>
										<div className='skill-name'>HTML</div>
										<div className='skill-progress'>
											<span style={{ width: '90%' }}></span>
										</div>
										<div className='skill-per'>90%</div>
									</li>
									<li>
										<div className='skill-name'>JS</div>
										<div className='skill-progress'>
											<span style={{ width: '70%' }}></span>
										</div>
										<div className='skill-per'>70%</div>
									</li>
									<li>
										<div className='skill-name'>React</div>
										<div className='skill-progress'>
											<span style={{ width: '80%' }}></span>
										</div>
										<div className='skill-per'>80%</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='resume-right'>
						<div className='resume-item resume-about'>
							<div className='title'>
								<p className='bold'>About Me</p>
							</div>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
								tempora, ipsam eveniet recusandae molestiae vitae maxime voluptas quo
								unde? Possimus?
							</p>
						</div>

						<div className='resume-item resume-work'>
							<div className='title'>
								<p className='bold'>Work Experience</p>
							</div>
							<ul>
								<li>
									<div className='date'>2013 - 2015</div>
									<div className='info'>
										<p className='semi-bold'>Lorem ipsum dolor sit amet.</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore
											impedit sequi, eum illum voluptas!
										</p>
									</div>
								</li>
								<li>
									<div className='date'>2013 - 2017</div>
									<div className='info'>
										<p className='semi-bold'>Lorem ipsum dolor sit amet.</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore
											impedit sequi, eum illum voluptas!
										</p>
									</div>
								</li>
								<li>
									<div className='date'>2013 - Present</div>
									<div className='info'>
										<p className='semi-bold'>Lorem ipsum dolor sit amet.</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore
											impedit sequi, eum illum voluptas!
										</p>
									</div>
								</li>
							</ul>
						</div>
						<div className='resume-item resume-education'>
							<div className='title'>
								<p className='bold'>Education</p>
							</div>
							<ul>
								<li>
									<div className='date'>2010 - 2013</div>
									<div className='info'>
										<p className='semi-bold'>
											Cape Academy of Maths, Science and Technology
										</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore
											impedit sequi, eum illum voluptas!
										</p>
									</div>
								</li>
								<li>
									<div className='date'>2013 - 2010</div>
									<div className='info'>
										<p className='semi-bold'>Life Choices Academy</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore
											impedit sequi, eum illum voluptas!
										</p>
									</div>
								</li>
							</ul>
						</div>
						<div className='resume-item resume-hobby'>
							<div className='title'>
								<p className='bold'>hobby</p>
							</div>
							<ul>
								<li>
									<MenuBookIcon
										style={{
											fontSize: '35px',
											position: 'absolute',
											transform: 'translate(-50%, -50%)',
											top: '50%',
											left: '50%',
										}}
									/>
								</li>
								<li>
									<FitnessCenterIcon
										style={{
											fontSize: '35px',
											position: 'absolute',
											transform: 'translate(-50%, -50%)',
											top: '50%',
											left: '50%',
										}}
									/>
								</li>
								<li>
									<TerrainIcon
										style={{
											fontSize: '35px',
											position: 'absolute',
											transform: 'translate(-50%, -50%)',
											top: '50%',
											left: '50%',
										}}
									/>
								</li>
								<li>
									<SportsEsportsIcon
										style={{
											fontSize: '35px',
											position: 'absolute',
											transform: 'translate(-50%, -50%)',
											top: '50%',
											left: '50%',
										}}
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default Resume;
