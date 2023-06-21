import React, {useEffect} from 'react'
import '../styles/Projects.css'
import HoverVideoPlayer from 'react-hover-video-player'
import GitHubIcon from '@mui/icons-material/GitHub'
import ProjectCard from './ProjectCard'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles


const data = [
	{
		image: require('../images/sharphouse.png'),
		demoURL: 'https://sharphouse-6490a.web.app/',
		disabled: false,
		codeURL: 'https://github.com/pmongkho/SHARPHOUSEMEDIA',
		technologies: ['React.js', 'Firebase', 'CSS', 'HTML'],
	},
	{
		image: require('../images/uberclone1.PNG'),
		demoURL: '',
		disabled: true,
		codeURL: 'https://github.com/pmongkho/RN_UBER_CLONE',
		technologies: [
			'React Native',
			'Redux',
			'Google Autocomplete API',
			'Google Maps API',
		],
	},
	{
		image: require('../images/math.png'),
		demoURL: '',
		disabled: true,
		codeURL: 'https://github.com/pmongkho/MATH_TS',
		technologies: [
			'React',
			'Redux',
			'TypeScript',
			'TailwindCSS',
		],
	},
]

function Projects() {
		useEffect(() => {
			AOS.init({
				duration: 5000,
			})
		}, [])
	return (
		<div className='projects' data-aos='fade-up' >
			<h1>
				Projects <GitHubIcon fontSize='50' />
			</h1>
			<div className='projects_container'>
				{data.map((project) => (
					<ProjectCard
						image={project.image}
						demo={project.demoURL}
						code={project.codeURL}
						technologies={project.technologies}
					/>
				))}
			</div>
		</div>
	)
}

export default Projects
