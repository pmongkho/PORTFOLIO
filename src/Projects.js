import React from 'react'
import './Projects.css'
import project0 from './videos/sharphouse.mp4'
import project1 from './videos/tattooconsult.mp4'
import project2 from './videos/tetris-app.mp4'

import HoverVideoPlayer from 'react-hover-video-player'
import GitHubIcon from '@mui/icons-material/GitHub'

function Projects() {
  return (
		<div className="projects">
			<h1>
				Projects <GitHubIcon fontSize="50" />
			</h1>
			<div className="projects_container">
				<a href="https://github.com/pmongkho/SHARPHOUSEMEDIA" target="_blank">
					<div className="project_card">
						<HoverVideoPlayer
							style={{ color: "black", width: "350px" }}
							videoSrc={project0}
							hoverOverlay={
								<div className="hover-overlay">
									<div className="">
										<h2>Sharp House Media</h2>
										<p>REACT, Firebase</p>{" "}
										<p>
											https://github.com/pmongkho/GOOGLE-TRANSLATE-REACT-AXIOS-EXPRESS
										</p>
									</div>
								</div>
							}
						/>
					</div>
				</a>
				<a href="#" target="_blank">
					<div className="project_card">
						<HoverVideoPlayer
							style={{ color: "black", width: "350px" }}
							videoSrc={project1}
							hoverOverlay={
								<div className="hover-overlay">
									<div className="">
										<h2>Tattoo Consultation</h2>
										<p>REACT, Django Rest Framework</p> <p></p>
									</div>
								</div>
							}
						/>
					</div>
				</a>

				<a href="https://github.com/pmongkho/TETRIS-VANILLAJS" target="_blank">
					<div className="project_card">
						<HoverVideoPlayer
							style={{ color: "black", width: "350px" }}
							videoSrc={project2}
							hoverOverlay={
								<div className="hover-overlay">
									<div className="">
										<h2>Tetris App</h2>
										<p>Vanilla JS, HTML, CSS</p>{" "}
										<p>https://github.com/pmongkho/TETRIS-VANILLAJS</p>
									</div>
								</div>
							}
						/>
					</div>
				</a>

				<div className="projects-icon"> </div>
			</div>
		</div>
	);
}

export default Projects
