# React Sticky Timer
[![Build Status](https://travis-ci.org/sebastianlzy/react-sticky-timer.svg?branch=master)](https://travis-ci.org/sebastianlzy/react-sticky-timer)

### Introduction
A simple to use countdown sticky that sticks to the top. [demo](https://sebastianlzy.github.io/react-sticky-timer/)

### Dependencies
[momentjs](http://momentjs.com/)

-----------
### Install

```cli
    npm install --save react-sticky-timer
```

### Usage
```js
    const units = {
        seconds: '',
        minutes: ':',
        hours: ':',
        days: 'day',
        years: 'year',
        months: 'month'
    };
```
    
```js
    <StickyTimer
        textMessage={this.state.message}
        end={moment(this.state.end)}
        units={units}
        countDownMessage={this.state.countDownMessage}
    />
```

### All options

```js
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
```

### Help
Refer to App.js

### Improvement

1. [ ] Test/Test coverage report
2. [ ] CI/CD process
3. [ ] Remove dependency from moment

Any feedbacks or contributions are welcome!