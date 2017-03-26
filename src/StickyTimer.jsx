import React, {PropTypes} from 'react';
import moment from 'moment';

import Timer from './timer/Timer';
import Text from './text/Text';

class StickyTimer extends React.Component {
  static propTypes = {
    end: PropTypes.object,
    units: PropTypes.object,
    textMessage: PropTypes.string,
    countDownMessage: PropTypes.string,
    styleSticky: PropTypes.object,
    styleText: PropTypes.object,
    styleTimer: PropTypes.object,
    classNameText: PropTypes.string,
    classNameTimer: PropTypes.string,
    classNameSticky: PropTypes.string
  };

  static defaultProps = {
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

  render() {
    return (
      <div className={this.props.classNameSticky} style={this.props.styleSticky}>
          <Text
            message={this.props.textMessage}
            className={this.props.classNameText}
            style={this.props.styleText}
          />
          <Timer
            end={moment(this.props.end)}
            className={this.props.classNameTimer}
            countDownMessage={this.props.countDownMessage}
            units={this.props.units}
            style={this.props.styleTimer}
          />
      </div>
    );
  }
}

export default StickyTimer;

