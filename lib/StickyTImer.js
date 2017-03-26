'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Timer = require('./timer/Timer');

var _Timer2 = _interopRequireDefault(_Timer);

var _Text = require('./text/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StickyTimer = function (_React$Component) {
  _inherits(StickyTimer, _React$Component);

  function StickyTimer() {
    _classCallCheck(this, StickyTimer);

    return _possibleConstructorReturn(this, (StickyTimer.__proto__ || Object.getPrototypeOf(StickyTimer)).apply(this, arguments));
  }

  _createClass(StickyTimer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.classNameSticky, style: this.props.styleSticky },
        _react2.default.createElement(_Text2.default, {
          message: this.props.textMessage,
          className: this.props.classNameText,
          style: this.props.styleText
        }),
        _react2.default.createElement(_Timer2.default, {
          end: (0, _moment2.default)(this.props.end),
          className: this.props.classNameTimer,
          countDownMessage: this.props.countDownMessage,
          units: this.props.units,
          style: this.props.styleTimer
        })
      );
    }
  }]);

  return StickyTimer;
}(_react2.default.Component);

StickyTimer.propTypes = {
  end: _react.PropTypes.object,
  units: _react.PropTypes.object,
  textMessage: _react.PropTypes.string,
  countDownMessage: _react.PropTypes.string,
  styleSticky: _react.PropTypes.object,
  styleText: _react.PropTypes.object,
  styleTimer: _react.PropTypes.object,
  classNameText: _react.PropTypes.string,
  classNameTimer: _react.PropTypes.string,
  classNameSticky: _react.PropTypes.string
};
StickyTimer.defaultProps = {
  styleSticky: {
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    width: '100%'
  },
  classNameText: 'text',
  classNameTimer: 'timer',
  classNameSticky: 'sticky-timer'
};
exports.default = StickyTimer;
module.exports = exports['default'];