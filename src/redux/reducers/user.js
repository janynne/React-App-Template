const INITIAL_STATE = {
    isAuthenticated: false,
    scopes: [],
    roles: [],
    username: '',
    displayName:'',
    access_token: '',
    permissions: [],
    userMarkerChangeEnabled:false,
    authData: null,
    location: {
        lat: 0,
        lng: 0
    }
  };
    
  function userReducer(state = INITIAL_STATE, action) {
      switch (action.type) {

          case 'AUTHENTICATED': {
              return {
                  ...state,
                  isAuthenticated: true,
                  ...action.user
              }
          } 
          case 'LOGOUT':
                return {
                    ...INITIAL_STATE
                }
         
        default: return state;
    }
  }
  
  export default userReducer;

