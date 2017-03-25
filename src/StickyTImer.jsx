import React, {PropTypes} from 'react';
import moment from 'moment';

import Timer from './timer/Timer';
import Text from './text/Text';
import './StickyTimer.css';

class StickyTimer extends React.Component {
  static propTypes = {
    end: PropTypes.object,
    start: PropTypes.object,
    language: PropTypes.object,
    textMessage: PropTypes.string
  };

  render() {
    return (
      <div className='sticky-timer'>
          <Text textMessage={this.props.textMessage} className={'text'}/>
          <Timer end={this.props.end} start={this.props.start} className={'timer'} language={this.props.language}/>
      </div>
    );
  }
}

export default StickyTimer;

