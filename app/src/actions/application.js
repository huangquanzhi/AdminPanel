import _ from 'lodash';

import {
  APPLICATION_SET_VIEW,
  VIEW_LIST_HOME,
  VIEW_LIST_GROUP
} from '../constants/application';

const VIEW_LIST = [
  VIEW_LIST_HOME,
  VIEW_LIST_GROUP
];

export function setView(view) {
  return (dispatch) => {
    if (_.find(VIEW_LIST, v => v === view)) { // returns string of result else undefined
      dispatch({ type: APPLICATION_SET_VIEW, view });
    }
  };
}
