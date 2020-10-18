import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

class NavigationPanel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentPage: props.page
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(e) {
		const newAncor = e.target.pathname
		this.setState({
			currentPage: newAncor
		})
	}
	render() {
		return (
			<div className="nav-container">
				<NameTag />
				<NavPoint
					name="Home"
					linkAddress="/home"
					onClick={this.handleClick}
					on={this.state.currentPage === '/home'}
				/>
				<NavPoint
					name="Profile"
					linkAddress="/profile"
					onClick={this.handleClick}
					on={this.state.currentPage === '/profile'}
				/>
				<NavPoint
					name="Projects"
					linkAddress="/projects"
					onClick={this.handleClick}
					on={this.state.currentPage === '/projects'}
				/>
				<NavPoint
					name="Contact Me" 
					linkAddress="/contact-me"
					onClick={this.handleClick}
					on={this.state.currentPage === '/contact-me'}
				/>

			</div>

		);
	}
}

class NavPoint extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			isOver: false
		}

		this.handleMouseOver = this.handleMouseOver.bind(this)
		this.handleMouseOut = this.handleMouseOut.bind(this)
	}

	
	handleMouseOver(e) {
		this.setState({
			isOver: true
		})
	}

	handleMouseOut(e) {
		this.setState({
			isOver:false
		})
	}
	
	render() {		

		return (
			<div className="nav-link-holder">
				<Link 
					to={this.props.linkAddress}  
					className={classNames('nav-link', {'link-selected': this.props.on})} 
					onClick={this.props.onClick}
					onMouseOver={this.handleMouseOver}	
					onMouseOut={this.handleMouseOut}
				>

					{this.props.name}
				</Link>
				<div className={classNames('underline', {'underline-nav-link': this.props.on || this.state.isOver})}></div>
			</div>
		)
	}

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