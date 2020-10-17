import React from 'react'
import Board from './Board'


class Game extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			history: [{
				squares: Array(9).fill(null),
			}],
			stepNumber: 0,
			exsTurn: true,
			wins: {
				Xwins: 0,
				Owins: 0
			}
		}
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = this.calculateWinner(current.squares);

		let status;
		if (winner) {
			status = 'Winner: ' + winner
			return <WinnerJumbo winner={winner} onClick={() => this.resetBoard()} />
		}
		else {
			status = 'Players Turn: ' + (this.state.exsTurn ? 'X' : 'O')
		}
		return (
			<div className='game-box'>
				<Board
					squares={current.squares}
					onClick={(i) => this.handleClick(i)}
				/>
				<div className="game-info">
					<div>{status}</div>
					<div className="wins">
						<p>
							<span className="x-wins">X: </span>
							 {this.state.wins.Xwins}  
							 <span className="o-wins"> O: </span> 
							 {this.state.wins.Owins}
						</p>
					</div>
					<button 
						className="btn undo-btn" 
						type="button"
						onClick={() => this.jumpTo(this.state.stepNumber - 1)}>
							Undo
						</button>
				</div>
			</div>

		)

	}

	handleClick(index) {
		const history = this.state.history.splice(0, this.state.stepNumber + 1)
		const current = history[history.length - 1];
		const squares = current.squares.slice()

		if (squares[index]) {
			return;
		}
		squares[index] = this.state.exsTurn ? 'X' : 'O'
		this.setState({
			history: history.concat([{
				squares: squares,
			}]),
			stepNumber: history.length,
			exsTurn: !this.state.exsTurn
		})

	}

	calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		return null;
	}

	resetBoard() {
		const wins = this.state.wins
		const game_state = this.state.exsTurn ? 'O' : 'X';
		game_state === 'X' ? wins.Xwins += 1 : wins.Owins += 1;			//add the win for the winner
		this.setState({
			history: [{
				squares: Array(9).fill(null),
			}],
			wins: wins,
			stepNumber: 0,
			exsTurn: !this.state.exsTurn
		})
	}

	jumpTo(step) {
		if (step < 0) return;
		this.setState({
			stepNumber: step,
			exsTurn: (step % 2) === 0
		})
	}
}

function WinnerJumbo(props) {
	return (
		<div className="winner-jumbotron">
			<div className="winner-jumbo-contents" style={{"background-color":props.winner === 'X' ? 'red' : 'blue'}}>
				<p className="winner-text">Winner: {props.winner}</p>
				<button 
					className="btn play-again-btn" 
					onClick={props.onClick}
					type="button">
						Play Again
				</button>
			</div>
		</div>
	)
}

export default Game