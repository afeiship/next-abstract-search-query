# react-range
> Pure range form element for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-range
```

## properties
| Name         | Type   | Required | Default | Description                           |
| ------------ | ------ | -------- | ------- | ------------------------------------- |
| className    | string | false    | -       | The extended className for component. |
| value        | string | false    | -       | The runtime value.                    |
| defaultValue | string | false    | -       | The default value.                    |
| name         | string | false    | -       | The form control name.                |
| onChange     | func   | false    | noop    | The handler when data change.         |


## usage
1. import css
  ```scss
  @import "~@jswork/react-range/dist/style.css";

  // or use sass
  @import "~@jswork/react-range/dist/style.scss";

  // customize your styles:
  $react-range-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactRange from '@jswork/react-range';
  import './assets/style.scss';

  class App extends React.Component {
    state = { value: 2 };
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-range">
          <article class="message is-info">
            <div class="message-header">Preview:</div>
            <div class="message-body">
              <ReactRange
                min="2"
                max="10"
                step="2"
                value={this.state.value}
                onChange={(e) => {
                  this.setState({ value: e.target.value });
                }}
              />
            </div>
          </article>

          <article class="message">
            <div class="message-header">Value changed:</div>
            <div class="message-body">{JSON.stringify(this.state.value)}</div>
          </article>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-range/


## license
Code released under [the MIT license](https://github.com/afeiship/react-range/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-range
[version-url]: https://npmjs.org/package/@jswork/react-range

[license-image]: https://img.shields.io/npm/l/@jswork/react-range
[license-url]: https://github.com/afeiship/react-range/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-range
[size-url]: https://github.com/afeiship/react-range/blob/master/dist/react-range.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-range
[download-url]: https://www.npmjs.com/package/@jswork/react-range
