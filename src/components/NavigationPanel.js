import React from 'react'
import NavPoint from './NavPoint'
import Burger from '../images/icon-hamburger.svg'
import CloseBurger from '../images/icon-close.svg'

class NavigationPanel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isBurger: true,
			width: window.innerWidth
		}

		this.burgerClick = this.burgerClick.bind(this)
		this.updateDimensions = this.updateDimensions.bind(this)
		this.switchBurger = this.switchBurger.bind(this)
		this.updateScreen = this.updateScreen.bind(this)
		this.closeOnTouchIfMini = this.closeOnTouchIfMini.bind(this)
	}


	burgerClick(e) {


	}

	//switch visible state of the burger
	switchBurger() {
		let burger = document.querySelector('.burger')
		burger.src = burger.src.includes('ham') ? CloseBurger : Burger
	}

	makeBurger() {
		document.querySelector('.burger').src = Burger
	}
	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
		window.addEventListener('click', this.updateScreen);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

	//listen for the window width and render burger button accordingly
	updateDimensions() {
		let elements = document.querySelector('.frosted-glass')
		if (window.innerWidth > 720) {
			elements.style.display = 'flex'
		}
		else {
			elements.style.display = 'none'
			this.makeBurger()
			this.setState({
				isBurger: true,
				width: window.innerWidth
			})
		}
	}
	//handle basic open and close of the burger button
	//handle closing the mini nav pop up if another part of the screen is clicked or touched
	updateScreen(e) {
		let isBurger = this.state.isBurger
		//if the mini nav bar is open listen for any clicks outside the nav bars box
		//and close it when there is a click or touch
		if (!isBurger && this.state.width < 721) {
			let allowedTargets = ['frosted-glass', 'nav-links', 'nav-link-holder', 'nav-link', 'link-selected', 'underline', 'underline-nav-link']
			let allowed = false
			e.target.classList.forEach(element => {
				if (allowedTargets.indexOf(element) >= 0) {
					allowed = true
					return;
				}
			});

			if (!allowed) {
				document.querySelector('.frosted-glass').style.display = 'none'
				this.makeBurger()
				this.setState({
					isBurger: true
				})
			}
		}
		//open the mini nav bar when the burger is cliked
		else if (isBurger && e.target.classList[0] === 'burger') {
			this.switchBurger()
			this.setState({
				isBurger: !isBurger
			})
			document.querySelector('.frosted-glass').style.display = 'flex'
		}
	}

	//close the mini nav bar once a link is clicked
	closeOnTouchIfMini(e) {
		if (this.state.width < 721) {
			let isLink = false
			e.target.classList.forEach(_class => {
				if (_class === 'nav-link')
					isLink = true
			})
		
			if (isLink) {
				let isBurger = this.state.isBurger
				this.switchBurger()
				document.querySelector('.frosted-glass').style.display = 'none'
				this.setState({
					isBurger: !isBurger
				})
			}
		}
	}


	render() {
		return (
			<div className="nav-container">
				<NameTag />
				<img src={Burger} alt="burger or close" className='burger'></img>
				<div className="frosted-glass">


					<div className='nav-links' onClick={this.closeOnTouchIfMini}>

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