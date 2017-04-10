import {
  APPLICATION_SET_VIEW,
  VIEW_LIST_HOME
} from '../constants/application';


const initialState = {
  view: VIEW_LIST_HOME
};

const application = (state = initialState, action) => {
  switch (action.type) {
    case APPLICATION_SET_VIEW:
      return Object.assign({}, state, {
        view: action.view
      });
    default:
      return state;
  }
};

export default application;
