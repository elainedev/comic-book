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

	render() {
		return (
			<div className="book-container">
				<BookCover />
			</div>
		)
	}
}

class BookCover extends React.Component {

	render() {
		return (
			<div className="cover page-size right-page">
				<div className="cover-title">Elaine's Book of Original Comics and Other Creations</div>
			</div>
		)
	}
}

let domContainer = document.querySelector("#page-container");
ReactDOM.render(<ComicBookPageContainer />, domContainer);