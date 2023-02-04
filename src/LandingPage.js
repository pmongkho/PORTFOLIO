import React from "react"
import "./LandingPage.css"
import TerminalIcon from "@mui/icons-material/Terminal"
import StorageIcon from "@mui/icons-material/Storage"
import FindInPageIcon from "@mui/icons-material/FindInPage"

const LandingPage = () => {
	return (
		<div className="landing-page">
			<div className="container">
				<h1>Boost Your Business with AzulaTech</h1>
				<div className="row">
					<div className="col hover">
						<h2> Software Development</h2>
						<TerminalIcon sx={{ fontSize: 100, color: "#fff" }} />
					</div>
					<div className="col hover">
						<h2>Database Management</h2>
						<StorageIcon sx={{ fontSize: 100, color: "#fff" }} />
					</div>
					<div className="col hover">
						<h2>SEO Optimization</h2>
						<FindInPageIcon sx={{ fontSize: 100, color: "#fff" }} />
					</div>
				</div>
				<h1>Get A Free Consultation</h1>
				<div className="row">
					<div className="start-btn hover">Start Now</div>
				</div>
			</div>
		</div>
	)
}

export default LandingPage
