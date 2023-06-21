import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import '../styles/AboutMe.css'
import { Button } from '@mui/material'

function AboutCard() {
	return (
		<div>
			<div className='left'>
				<div className='image'>
					<img
						className='AboutMeimage'
						src='https://avatars.githubusercontent.com/u/71842268?v=4'
						alt='github profile image'
					/>
				</div>
				<div className='introduction'>
					<h1>Hello, I'm Eddy!</h1>

					<small>Computer Science Student at Fort Hays State University</small>
					<div>Class of 2023</div>
				</div>
				<div className='socialicons'>
					<div>
						<a href='https://github.com/pmongkho' target='_blank'>
							<GitHubIcon fontSize='50' />
						</a>

						<a
							href='https://www.linkedin.com/in/phongsavanh-mongkhonvilay-6b25191a8/'
							target='_blank'
						>
							<LinkedInIcon fontSize='50' />
						</a>
					</div>
				</div>
				<div className='download'>
					<a href='../documents/UpdatedCVMongkhonvilay.pdf' download>
						<Button fontSize='50'>Download My Resume</Button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default AboutCard
