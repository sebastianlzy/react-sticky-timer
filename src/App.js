import React, {Component} from 'react';
import moment from 'moment';

import StickyTimer from './StickyTImer';
import './App.css';

class App extends Component {

  state = {
    message: 'I am counting down to a brand new year',
    countDownMessage: 'Start in',
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

  renderState = () => {
    return (
      <div className="state">
            <pre>
              <code>
                &#123;
                <br/>
                &nbsp;&nbsp;message: '{this.state.message}',
                <br/>
                &nbsp;&nbsp;countDownMessage: '{this.state.countDownMessage}',
                <br/>
                &nbsp;&nbsp;end: '{this.state.end}',
                <br/>
                &#125;
              </code>
            </pre>
      </div>
    )
  };

  render() {
    const language = {
      seconds: '',
      minutes: ':',
      hours: ':',
      days: 'day',
      years: 'year',
      months: 'month'
    };
    return (
      <div className="react-timer">
        <StickyTimer
          textMessage={this.state.message}
          end={moment(this.state.end)}
          language={language}
          countDownMessage={this.state.countDownMessage}
        />
        <div className="container">
          <h1 className='title'>React Sticky Timer</h1>
          <div className="inputs">
            {this.renderInputFields('message', 'Text Message', 'envelope')}
            {this.renderInputFields('countDownMessage', 'Count Down Message', 'envelope')}
            {this.renderInputFields('end', 'End Date Time', 'calendar')}
          </div>
          {this.renderState()}
        </div>
      </div>
    );
  }
}

export default App;
