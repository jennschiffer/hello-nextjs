'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _redux = require('redux');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../store');

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Navigation = require('../components/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/app/pages/chapter.js?entry';


var Chapter = function (_React$Component) {
  (0, _inherits3.default)(Chapter, _React$Component);

  function Chapter() {
    (0, _classCallCheck3.default)(this, Chapter);

    return (0, _possibleConstructorReturn3.default)(this, (Chapter.__proto__ || (0, _getPrototypeOf2.default)(Chapter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Chapter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement(_reactMarkdown2.default, { source: this.props.chapterContent, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement(_Navigation2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var chapter = _ref.query.chapter,
          store = _ref.store,
          chapterContent = _ref.chapterContent;

      store.dispatch((0, _store.loadChapter)(chapter));
      return { chapterContent: chapterContent };
    }
  }]);

  return Chapter;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadChapter: (0, _redux.bindActionCreators)(_store.loadChapter, dispatch)
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(Chapter);