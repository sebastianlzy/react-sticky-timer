import React, {PropTypes, Component} from 'react';
import moment from 'moment';

import StickyTimer from './StickyTImer';
import './App.css';

class App extends Component {

  state = {
    message: 'I am counting down to a brand new year',
    start: '2017-04-15 00:00:00',
    end: '2018-01-01 00:00:00'
  };

  handleChange = (value) => (evt) => {
    this.setState({
      [value]: evt.target.value
    });
  };

  renderInputFields = (value, placeholder, fontIcon) => {
    return (
      <div className="field">
        <p className="control has-icon">
          <input
            className="input"
            type="text"
            placeholder={placeholder}
            value={this.state[value]}
            onChange={this.handleChange([value])}
          />
          <span className="icon is-small">
                  <i className={`fa fa-${fontIcon}`}/>
                </span>
        </p>
      </div>
    )
  };

  render() {
    const start = this.state.start === '' ? moment() : moment(this.state.start);
    return (
      <div className="react-timer">
        <StickyTimer
          textMessage={this.state.message}
          end={moment(this.state.end)}
          start={start}
        />
        <div className="container">
          <h1 className='title'>React Sticky Timer</h1>
          <div className="inputs">
            {this.renderInputFields('message', 'Text Message', 'envelope')}
            {this.renderInputFields('start', 'Start Date Time', 'calendar')}
            {this.renderInputFields('end', 'End Date Time', 'calendar')}
          </div>
          <div className="state">
            <pre>
              <code>
                &#123;
                <br/>
                &nbsp;&nbsp;message: {this.state.message},
                <br/>
                &nbsp;&nbsp;end: {this.state.end},
                <br/>
                &nbsp;&nbsp;start: {this.state.start}
                <br/>
                &#125;
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
