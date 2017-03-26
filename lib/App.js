'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _StickyTimer = require('./StickyTimer');

var _StickyTimer2 = _interopRequireDefault(_StickyTimer);

require('./App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      message: 'I am counting down to a brand new year',
      countDownMessage: 'Start in',
      end: '2018-01-01 00:00:00'
    }, _this.handleChange = function (value) {
      return function (evt) {
        _this.setState(_defineProperty({}, value, evt.target.value));
      };
    }, _this.renderInputFields = function (value, placeholder, fontIcon) {
      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(
          'p',
          { className: 'control has-icon' },
          _react2.default.createElement('input', {
            className: 'input',
            type: 'text',
            placeholder: placeholder,
            value: _this.state[value],
            onChange: _this.handleChange([value])
          }),
          _react2.default.createElement(
            'span',
            { className: 'icon is-small' },
            _react2.default.createElement('i', { className: 'fa fa-' + fontIcon })
          )
        )
      );
    }, _this.renderState = function () {
      return _react2.default.createElement(
        'div',
        { className: 'state' },
        _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            'code',
            null,
            '{',
            _react2.default.createElement('br', null),
            '\xA0\xA0message: \'',
            _this.state.message,
            '\',',
            _react2.default.createElement('br', null),
            '\xA0\xA0countDownMessage: \'',
            _this.state.countDownMessage,
            '\',',
            _react2.default.createElement('br', null),
            '\xA0\xA0end: \'',
            _this.state.end,
            '\',',
            _react2.default.createElement('br', null),
            '}'
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var units = {
        seconds: '',
        minutes: ':',
        hours: ':',
        days: 'day',
        years: 'year',
        months: 'month'
      };
      return _react2.default.createElement(
        'div',
        { className: 'react-timer' },
        _react2.default.createElement(_StickyTimer2.default, {
          textMessage: this.state.message,
          end: (0, _moment2.default)(this.state.end),
          units: units,
          countDownMessage: this.state.countDownMessage
        }),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h1',
            { className: 'title' },
            'React Sticky Timer'
          ),
          _react2.default.createElement(
            'div',
            { className: 'inputs' },
            this.renderInputFields('message', 'Text Message', 'envelope'),
            this.renderInputFields('countDownMessage', 'Count Down Message', 'envelope'),
            this.renderInputFields('end', 'End Date Time', 'calendar')
          ),
          this.renderState()
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
module.exports = exports['default'];