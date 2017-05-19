import {
  APPLICATION_SET_VIEW,
  VIEW_LIST_HOME
} from '../constants/application';


const initialState = {
  currentView: VIEW_LIST_HOME,
  applicationTitle: '',
  viewConfig: {
    pageTitle: '',
  }
};

const application = (state = initialState, action) => {
  switch (action.type) {
    case APPLICATION_SET_VIEW:
      return Object.assign({}, state, {
        currentView: action.view
      });
    default:
      return state;
  }
};

export default application;
