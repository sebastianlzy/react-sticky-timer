import React, {PropTypes} from 'react';

class Text extends React.Component {
  static propTypes = {
    textMessage: PropTypes.string,
    className: PropTypes.string
  };

  render() {
    return (
      <div className={this.props.className}>{this.props.textMessage}</div>
    );
  }
}

export default Text;

