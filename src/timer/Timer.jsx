import React, {PropTypes} from 'react';
import moment from 'moment';

class Timer extends React.Component {

  intervalCount;
  static propTypes = {
    end: PropTypes.object,
    language: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    language: {
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

  state = {
    countDownText: '',
    isVisible: true
  };

  componentDidMount = () => {
    this.startInterval(this.countDownTimer)
  };

  startInterval = (func) => {
      clearInterval(this.intervalCount);
      this.intervalCount = setInterval(func, 1000)
  };

  isAlphaNumeric = (string) => {
    return /^[a-z0-9]+$/i.test(string);
  };

  pluraize = (value, word) => {
    if(value > 1 && this.isAlphaNumeric(word)) return `${word}s`;
    return word;
  };

  makeItADoubleDigit = (value) => {
    if(value.toString().length === 1){
      return `0${value}`
    }
    return value;
  };

  countDownTimer = () => {
    const timeDifferencesInMilliSeconds = this.props.end.diff(moment());
    if(timeDifferencesInMilliSeconds <= 0) {
      this.setState({countDownText: '', isVisible: false});
      return ;
    }
    const momentDuration = moment.duration(timeDifferencesInMilliSeconds);

    const countdownText = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'].map((timeUnit) => {
      let timeDuration = momentDuration[timeUnit]();
      if (timeDuration > 0 || ['minutes', 'seconds'].indexOf(timeUnit) > -1) {
        return `${this.makeItADoubleDigit(timeDuration)} ${this.pluraize(timeDuration, this.props.language[timeUnit])}`
      }
      return '';
    });
    this.setState({countDownText: countdownText.join(' '), isVisible: true})

  };

  render() {
    if (!this.state.isVisible) {
      return null;
    }
    return (
      <div className={this.props.className} style={this.props.style}>
        {this.props.countDownMessage}
        {this.state.countDownText}
      </div>
    );
  }
}

export default Timer;

