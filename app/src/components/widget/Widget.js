import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Widget extends PureComponent {
  render() {
    const { size, containerClass, contentClass } = this.props;

    const _class = classNames({
      'widget': true,
      [`widget-${size.width}x${size.height}`]: true,
      ...this.props.containerClass,
    });

    const _contentClass = classNames({
      'widget__content': true,
      ...this.props.contentClass,
    });

    return (
      <div className={_class}>
        <div className={_contentClass}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

const propTypes = {
  children: PropTypes.element,
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  containerClass: PropTypes.string,
  contentClass: PropTypes.string,
};

const defaults = {
  size: {
    width: 2,
    height: 2,
  }
}

Widget.propTypes = propTypes;
Widget.defaultProps = defaults;
