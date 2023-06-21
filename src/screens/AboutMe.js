import React, { useEffect, useRef } from 'react'
import '../styles/AboutMe.css'
import Projects from '../components/Projects'
import AboutCard from '../components/AboutCard'
import Stats from '../components/Stats'

function AboutMe() {
	const scrollToRef = useRef()

	return (
		<div className='AboutMe'>
			<div>
				<div className='container__left_right'>
					<div className='container__AboutMe'>
						<AboutCard />
					</div>
					<Stats />
				</div>

				<Projects />
			</div>
		</div>
	)
}

export default AboutMe
