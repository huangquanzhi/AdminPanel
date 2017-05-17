import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
  render() {
    return (
      <nav className="header">
        <div className="row">
          <div className="col-sm-3">
            <div className="logo">
                <a>LOGO</a>
            </div>
          </div>

          <div className="col-sm-9">
            <div className="setting-bar">
              <div className="setting-bar__menu">
                Setting
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
