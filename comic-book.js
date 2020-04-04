var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComicBookPageContainer = function (_React$Component) {
	_inherits(ComicBookPageContainer, _React$Component);

	function ComicBookPageContainer() {
		_classCallCheck(this, ComicBookPageContainer);

		return _possibleConstructorReturn(this, (ComicBookPageContainer.__proto__ || Object.getPrototypeOf(ComicBookPageContainer)).apply(this, arguments));
	}

	_createClass(ComicBookPageContainer, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "page-container" },
				React.createElement(BookContainer, null)
			);
		}
	}]);

	return ComicBookPageContainer;
}(React.Component);

var BookContainer = function (_React$Component2) {
	_inherits(BookContainer, _React$Component2);

	function BookContainer() {
		_classCallCheck(this, BookContainer);

		return _possibleConstructorReturn(this, (BookContainer.__proto__ || Object.getPrototypeOf(BookContainer)).apply(this, arguments));
	}

	_createClass(BookContainer, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "book-container" },
				React.createElement(BookCover, null)
			);
		}
	}]);

	return BookContainer;
}(React.Component);

var BookCover = function (_React$Component3) {
	_inherits(BookCover, _React$Component3);

	function BookCover() {
		_classCallCheck(this, BookCover);

		return _possibleConstructorReturn(this, (BookCover.__proto__ || Object.getPrototypeOf(BookCover)).apply(this, arguments));
	}

	_createClass(BookCover, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "cover page-size right-page" },
				React.createElement(
					"div",
					{ className: "cover-title" },
					"Elaine's Book of Original Comics and Other Creations"
				)
			);
		}
	}]);

	return BookCover;
}(React.Component);

var domContainer = document.querySelector("#page-container");
ReactDOM.render(React.createElement(ComicBookPageContainer, null), domContainer);