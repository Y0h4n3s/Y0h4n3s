import React from 'react'
import { Link } from 'react-router-dom'


function NavigationPanel(props) {
	return (
			<div className="nav-container">
				<NameTag />
				<NavPoint name="Home" linkAddress="/home" />
				<NavPoint name="Profile" linkAddress="/profile" />
				<NavPoint name="Projects" linkAddress="/projects" />
				<NavPoint name="Contact Me" linkAddress="/contact-me" />

			</div>

	);
}

function NavPoint(props) {
	return (
		<div className="nav-link-holder">
			<Link to={props.linkAddress} className="nav-link">
				{props.name}
			</Link>
			
		</div>
	)

}

function NameTag(props) {
	return (
		<div className="name-container">
			<h1 className="name-tag">
				Yohanes <span className="fathers-name">Kassu</span>
			</h1>
		</div>
	)
}

export default NavigationPanel