import React from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'

export default class NavPoint extends React.Component {

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