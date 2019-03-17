const INITIAL_STATE = {
    data: [],
    appRootUrl: process.env.REACT_APP_PUBLIC_URL,
    baseApiUrl: process.env.REACT_APP_API_URL
};

function mainReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SET_DATA': {
            return {
                ...state,
                data: action.data
            };
        }
     
        default: return state;
    }
}
  
export default mainReducer;
