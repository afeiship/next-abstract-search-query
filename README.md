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
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactRange from 'react-range';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactRange />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-range/

## resources
- https://www.w3school.com.cn/jsref/dom_obj_range.asp
