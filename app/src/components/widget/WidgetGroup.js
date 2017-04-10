import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Widget from './Widget';

export default class WidgetGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.renderWidgets = this.renderWidgets.bind(this);
  }

  renderWidgets() {
    const { items } = this.props;
    if ( items && items.length > 0) {
      return items.map((i) => {
        return (
          <Widget
            containerClass={i.containerClass}
            contentClass={i.contentClass}
            size={i.size}
          >
            { i.element }
          </Widget>
        )
      });
    }
  }

  render() {
    const { containerClass } = this.props;

    const _class = classNames({
      'widget-container': true,
      ...this.props.containerClass,
    });

    return (
      <ReactCSSTransitionGroup
        className={_class}
        component="div"
        transitionName="widget-container__transition"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        { this.renderWidgets() }
      </ReactCSSTransitionGroup>
    );
  }
}

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  containerClass: PropTypes.string,
};

Widget.propTypes = propTypes;
