'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timer = function (_React$Component) {
  _inherits(Timer, _React$Component);

  function Timer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Timer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Timer.__proto__ || Object.getPrototypeOf(Timer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      countDownText: '',
      isVisible: true
    }, _this.componentDidMount = function () {
      _this.startInterval(_this.countDownTimer);
    }, _this.startInterval = function (func) {
      clearInterval(_this.intervalCount);
      _this.intervalCount = setInterval(func, 1000);
    }, _this.isAlphaNumeric = function (string) {
      return (/^[a-z0-9]+$/i.test(string)
      );
    }, _this.pluraize = function (value, word) {
      if (value > 1 && _this.isAlphaNumeric(word)) return word + 's';
      return word;
    }, _this.makeItADoubleDigit = function (value) {
      if (value.toString().length === 1) {
        return '0' + value;
      }
      return value;
    }, _this.countDownTimer = function () {
      var timeDifferencesInMilliSeconds = _this.props.end.diff((0, _moment2.default)());
      if (timeDifferencesInMilliSeconds <= 0) {
        _this.setState({ countDownText: '', isVisible: false });
        return;
      }
      var momentDuration = _moment2.default.duration(timeDifferencesInMilliSeconds);

      var countdownText = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'].map(function (timeUnit) {
        var timeDuration = momentDuration[timeUnit]();
        if (timeDuration > 0 || ['minutes', 'seconds'].indexOf(timeUnit) > -1) {
          return _this.makeItADoubleDigit(timeDuration) + ' ' + _this.pluraize(timeDuration, _this.props.units[timeUnit]);
        }
        return '';
      });
      _this.setState({ countDownText: countdownText.join(' '), isVisible: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Timer, [{
    key: 'render',
    value: function render() {
      if (!this.state.isVisible) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: this.props.className, style: this.props.style },
        this.props.countDownMessage,
        this.state.countDownText
      );
    }
  }]);

  return Timer;
}(_react2.default.Component);

Timer.propTypes = {
  end: _react.PropTypes.object,
  units: _react.PropTypes.object,
  className: _react.PropTypes.string,
  style: _react.PropTypes.object
};
Timer.defaultProps = {
  units: {
    seconds: 'second',
    minutes: 'minute',
    hours: 'hour',
    days: 'day',
    years: 'year',
    months: 'month'
  },
  style: {
    display: 'inline-block',
    padding: '10px'
  }
};
exports.default = Timer;
module.exports = exports['default'];