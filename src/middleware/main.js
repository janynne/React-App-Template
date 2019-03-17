// import store from '../redux/store';

function mainMiddleware() {
    return (next) => async (action) => {
        switch (action.type) {
            case 'SOMETHING':
               
                break;
            default:
        }
        return next(action);
    };
}

export default mainMiddleware;