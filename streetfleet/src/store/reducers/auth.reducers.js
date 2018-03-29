const defaultState = {
  username: '',
  company: {},
  loggedIn: false,
  fetching: false,
  showSignUp: false,
  showLogin: false,
  showEditAccount: false,
  showDeleteAccount: false,
  message: {
    show: false,
    title: '',
    message: '',
  },

};
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_SIGN_UP':
      return {
        ...state,
        showSignUp: true,
      };
    case 'CREATE_ACCOUNT_SUCCESS':
      return {
        ...state,
        fetching: false,
        message: {
          show: true,
          title: 'Success',
          message: 'Account successfully created, please login to get started.',
        },
      };
    case 'CREATE_ACCOUNT_REQUEST':
      return {
        ...state,
        showSignUp: false,
        fetching: true,
      };
    case 'CREATE_ACCOUNT_FAILURE':
      return {
        ...state,
        fetching: false,
        message: {
          show: true,
          title: 'Ohh no!',
          message: 'Pardon us. Account creation failed, please try again!',
        },
      };
    case 'ON_CLOSE':
      return {
        ...state,
        showSignUp: false,
        showLogin: false,
        showEditAccount: false,
        showDeleteAccount: false,
        message: {
          show: false,
          title: '',
          message: '',
        },
      };


    ///////////////
    // LOGIN
    ///////////////

    case 'ON_SHOW_LOGIN':
      return {
        ...state,
        showLogin: true,
      };

    case 'LOGIN_SUCCESS':
      localStorage.setItem('JWT', action.response.json_token);
      localStorage.setItem('username', action.response.username);
      return {
        ...state,
        username: action.response.username,
        loggedIn: true,
        fetching: false,
      };

    case 'LOGIN_REQUEST':
      return {
        ...state,
        fetching: true,
        showLogin: false,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        fetching: false,
        message: {
          show: true,
          title: 'Login failed',
          message: action.response.errors,
        },
      };

    case 'LOGOUT':
      localStorage.setItem('JWT', '');
      localStorage.setItem('username', '');
      return defaultState;

    case 'LOAD_USER_FROM_TOKEN':
      if (localStorage.getItem('username')) {
        return {
          ...state,
          username: localStorage.getItem('username'),
          loggedIn: true,
        };
      }

      /////////////////////
      // ACCOUNT MANAGEMENT
      /////////////////////

      case 'GET_ACCOUNT_REQUEST':
      if (localStorage.getItem('username')) {
        return {
          ...state,
          fetching: true
        }
      };

      case 'GET_ACCOUNT_SUCCESS':
        return {
          ...state,
          fetching: false,
          company: action.response
        };

      case 'GET_ACCOUNT_FAILURE':
        return {
          ...state,
          fetching: false
        }

      case 'SHOW_EDIT_ACCOUNT':
        return {
          ...state,
          showEditAccount: true
        }

      case 'EDIT_ACCOUNT_REQUEST':
        return {
          ...state,
          fetching: true
        }

      case 'EDIT_ACCOUNT_SUCCESS':
        return {
          ...state,
          fetching: false,
          company: action.response,
          message: {
            show: true,
            title: 'Success',
            message: 'Account successfully modified.',
          },
        }

      case 'EDIT_ACCOUNT_FAILURE':
        return {
          ...state,
          fetching: false,
          message: {
            show: true,
            title: 'Ohh no!',
            message: 'Pardon us. Account modification failed, please try again!',
          },
        }

      case 'SHOW_DELETE_ACCOUNT':
      return {
        ...state,
        showDeleteAccount: true
      }

      case 'DELETE_ACCOUNT_REQUEST':
      return {
        ...state,
        fetching: true
      }

      case 'DELETE_ACCOUNT_SUCCESS':
      return {
        ...state,
        fetching: false,
        username: '',
        message: {
          show: true,
          title: 'Success',
          message: 'Account successfully deleted.',
        },
      }

      case 'DELETE_ACCOUNT_FAILURE':
      return {
        ...state,
        fetching: false,
        message: {
          show: true,
          title: 'Ohh no!',
          message: 'Pardon us. Account deletion failed, please try again!',
        },
      }

      break;
    default:
  }
  return state;
};
