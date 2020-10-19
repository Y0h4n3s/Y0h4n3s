import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Burger from '../images/icon-hamburger.svg'
import CloseBurger from '../images/icon-close.svg'

class NavigationPanel extends React.Component {

	burgerClick(e) {
		let isBurger = (e.target.src).includes('burger')
		if (isBurger) {
			let elements = document.querySelector('.frosted-glass')
			elements.style.display = 'flex'

		}
		else {
			let elements = document.querySelector('.frosted-glass')
			elements.style.display = 'none'
		}
		if (isBurger) {
			return e.target.src = CloseBurger
		}
		return e.target.src = Burger
	}
	render() {
		return (
			<div className="nav-container">
				<NameTag />
				<img src={Burger} onClick={this.burgerClick} alt="burger or close" className='burger'></img>
				<div className="frosted-glass">


					<div className='nav-links'>

						<NavPoint
							name="Home"
							linkAddress="/home"
							onClick={this.props.onClick}
							on={this.props.page === '/home'}
						/>
						<NavPoint
							name="Profile"
							linkAddress="/profile"
							onClick={this.props.onClick}
							on={this.props.page === '/profile'}
						/>
						<NavPoint
							name="Projects"
							linkAddress="/projects"
							onClick={this.props.onClick}
							on={this.props.page === '/projects'}
						/>
						<NavPoint
							name="Contact Me"
							linkAddress="/contact-me"
							onClick={this.props.onClick}
							on={this.props.page === '/contact-me'}
						/>
					</div>
				</div>

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
			isOver: false
		})
	}

	render() {

		return (
			<div className="nav-link-holder">
				<Link
					to={this.props.linkAddress}
					className={classNames('nav-link', { 'link-selected': this.props.on })}
					onClick={this.props.onClick}
					onMouseOver={this.handleMouseOver}
					onMouseOut={this.handleMouseOut}
				>
					{this.props.name}
				</Link>
				<div className={classNames('underline', { 'underline-nav-link': this.props.on || this.state.isOver })}></div>
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