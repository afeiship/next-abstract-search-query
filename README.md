# react-range
> Pure range form element for react.

## install
```shell
npm install -S afeiship/react-range
```

## usage
1. import css
  ```scss
  @import "~react-range/style.scss";

  // customize your styles:
  $react-range-options: ()
  ```
2. import js
  ```js
  import ReactRange from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <ReactRange
            min="2"
            max="10"
            step="2"
            defaultValue="4"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-range/

## resources
- https://www.w3school.com.cn/jsref/dom_obj_range.asp
