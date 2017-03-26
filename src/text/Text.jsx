import React, {PropTypes} from 'react';

class Text extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    style: {
      display: 'inline-block',
      padding: '10px'
    }
  };

  render() {
    return (
      <div className={this.props.className} style={this.props.style}>{this.props.message}</div>
    );
  }
}

export default Text;
