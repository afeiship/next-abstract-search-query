import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';

const CLASS_NAME = 'react-range';

export default class ReactRange extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The runtime value.
     */
    value: PropTypes.string,
    /**
     * The default value.
     */
    defaultValue: PropTypes.string,
    /**
     * The form control name.
     */
    name: PropTypes.string,
    /**
     * The handler when data change.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };

  render() {
    const { className, ...props } = this.props;
    return (
      <input
        type="range"
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
