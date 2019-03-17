import { createBrowserHistory } from 'history';

let history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

export const navigate = (url) => {

    history.push({ pathname: url });
};

export default history;
