import React, {PropTypes} from 'react';
import moment from 'moment';

class Timer extends React.Component {
  static propTypes = {
    end: PropTypes.object,
    start: PropTypes.object,
    language: PropTypes.object,
    className: PropTypes.string
  };

  static defaultProps = {
    language: {
      seconds: 'second',
      minutes: 'minute',
      hours: 'hour',
      days: 'day',
      years: 'year',
      months: 'month'
    }
  };

  pluraize = (value, word) => {
    if(value > 1) return `${word}s`;
    return word;
  };

  makeItADoubleDigit = (value) => {
    console.log('value - ', value);
    if(value.toString().length === 1){
      return `0${value}`
    }
    return value;
  };

  countDownTimer = () => {
    const timeDifferencesInMilliSeconds = this.props.end.diff(this.props.start);
    const momentDuration = moment.duration(timeDifferencesInMilliSeconds);
    const {days, hours, minutes, seconds} = this.props.language;
    const countdownText = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'].map((timeUnit) => {
        let timeDuration = momentDuration[timeUnit]();
        if (timeDuration > 0 || ['minutes', 'seconds'].indexOf(timeUnit) > -1) {
          return `${this.makeItADoubleDigit(timeDuration)} ${this.pluraize(timeDuration, this.props.language[timeUnit])}`
        }
        return '';
    });

    return countdownText.join(' ');
  };

  render() {
    return (
      <div className={this.props.className}>
        {this.countDownTimer()}
      </div>
    );
  }
}

export default Timer;

