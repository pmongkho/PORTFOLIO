import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "react-github-stats-card/dist/Card";
import "./AboutMe.css";
import { Button } from "@mui/material";
import Projects from "./Projects";

function AboutMe() {

	const downloadResume = () => {};
	return (
		<div className="AboutMe">
			<div className="">
				{" "}
				<div className="container__AboutMe">
					<div className="left">
						<div className="image">
							<img
								className="AboutMeimage"
								src="https://avatars.githubusercontent.com/u/71842268?v=4"
								alt=""
							/>
						</div>
						<div className="introduction">
							<h1>Hello, I'm Eddy!</h1>

							<small>
								Computer Science Student at Fort Hays State University{" "}
							</small>
							<div className="classname">Class of 2023</div>
						</div>
						<div className="socialicons">
							<div>
								<a href="https://github.com/pmongkho" target="_blank">
									<GitHubIcon fontSize="50" />
								</a>

								<a
									href="https://www.linkedin.com/in/phongsavanh-mongkhonvilay-6b25191a8/"
									target="_blank"
								>
									<LinkedInIcon fontSize="50" />
								</a>
							</div>
						</div>
						<div className="download">
							<a href="./Resume-Eddy-Mongkhonvilay" download>
								<Button fontSize="50" onClick={downloadResume}>
									Download My Resume
								</Button>
							</a>
						</div>
					</div>
					{/* <div className="right">
						<Card
							username="pmongkho"
							theme={true}
						/>
					</div> */}
				</div>
				<Projects />
			</div>
		</div>
	);
}

export default AboutMe;
