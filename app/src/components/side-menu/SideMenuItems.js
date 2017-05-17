import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class SideMenuItem extends PureComponent {
  render() {
    return (
        <li className="has_sub">
            <a href="javascript:void(0);" className="waves-effect"><i className="zmdi zmdi-layers"></i><span>Extra Pages </span> <span className="menu-arrow"></span></a>
            <ul className="list-unstyled">
                <li><a href="extras-projects.html">Projects</a></li>
                <li><a href="extras-tour.html">Tour</a></li>
                <li><a href="extras-taskboard.html">Taskboard</a></li>
                <li><a href="extras-taskdetail.html">Task Detail</a></li>
                <li><a href="extras-profile.html">Profile</a></li>
                <li><a href="extras-maps.html">Maps</a></li>
                <li><a href="extras-contact.html">Contact list</a></li>
                <li><a href="extras-pricing.html">Pricing</a></li>
                <li><a href="extras-timeline.html">Timeline</a></li>
                <li><a href="extras-invoice.html">Invoice</a></li>
                <li><a href="extras-faq.html">FAQ</a></li>
                <li><a href="extras-gallery.html">Gallery</a></li>
                <li><a href="extras-email-template.html">Email template</a></li>
                <li><a href="extras-maintenance.html">Maintenance</a></li>
                <li><a href="extras-comingsoon.html">Coming soon</a></li>
            </ul>
        </li>
    );
  }
}

const propTypes = {

};

const defaults = {

}

SideMenuItem.propTypes = propTypes;
SideMenuItem.defaultProps = defaults;
