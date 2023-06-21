import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import GitHubIcon from '@mui/icons-material/GitHub'

function ProjectCard({ image, demo, code, technologies, disabled }) {
	return (
		<div className='project_card'>
			<div className='container'>
        <div className='image'>
          
					<img src={image} alt='project image' />
				</div>
				<div className='overlay'>
					<div className='code_or_demo'>
						<a href={code} target='blank'>
							<div>
								<div className='code_item'>
									<GitHubIcon fontSize='50' />
									<div className=''> code</div>
								</div>
							</div>
						</a>

						{/* <a href={demo} target='blank'>
							<div>
								<div className='' aria-disabled={disabled}>
									<PlayCircleIcon fontSize='50'/>
									<div className=''>demo</div>
								</div>
							</div>
						</a> */}
					</div>

					<div className='technologies'>
						{technologies.map((tech) => (
							<div className='tech_item'>{tech}</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
