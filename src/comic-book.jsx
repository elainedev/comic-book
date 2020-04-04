class ComicBookPageContainer extends React.Component {

	render() {
		return (
			<div className="page-container">
				<BookContainer />
			</div>
		)
	}
}

class BookContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			flipThePage : false,
		}
		this.handleFlip = this.handleFlip.bind(this);
	}

	handleFlip() {
		console.log('page flipped');
		this.setState({
			flipThePage : true,
		})
	}

	render() {
		return (
			<div className="book-container">
				<BookCover flipThePage={this.state.flipThePage} handleFlip={this.handleFlip} />
			</div>
		)
	}
}

class BookCover extends React.Component {

	render() {
		return (
			<div className={`cover page-size ${this.props.flipThePage ? "left-page" : "right-page"}`}>
				<div className="cover-title">Elaine's Book of Original Comics and Other Creations</div>
				<button className="flip-page-btn" onClick={this.props.handleFlip}></button>
			</div>
		)
	}
}

let domContainer = document.querySelector("#page-container");
ReactDOM.render(<ComicBookPageContainer />, domContainer);