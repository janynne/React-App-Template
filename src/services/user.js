import store from '../redux/store';


 export const changeUserName = (userName) => {
    store.dispatch({type:'AUTHENTICATED', user: {displayName: userName} });

    let state = store.getState();
    console.log(state);
  }

  export const authenticate = (user) => {
    store.dispatch({type:'AUTHENTICATED', user });

    let state = store.getState();
    console.log(state);
  }

  export const setState = (user) => {
    store.dispatch({type:'AUTHENTICATED', user });

    let state = store.getState();
    console.log(state);
  }
 