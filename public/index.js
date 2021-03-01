import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactRange from '../src/main';
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
