import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadAsync } from './asyncLoader';

let AsyncScreen = {
    home: loadAsync('pages/home'),
    // todo: loadAsync('pages/todo'),
    // login: loadAsync('pages/login'),
    // logout: loadAsync('pages/logout'),
    // signup: loadAsync('pages/signup'),
    // changePassword: loadAsync('pages/changePassword'),
    // resetPassword: loadAsync('pages/resetPassword')
    about: loadAsync('pages/about')
};

class Routes extends Component {
        
    render() {
        return (
            <Switch>
                <Route path='/' exact component={AsyncScreen.home} />
                <Route path='/about' exact component={AsyncScreen.about} />
                {/* <Route path='/todo/:id' component={AsyncScreen.todo} />
                <Route path='/login' component={AsyncScreen.login} />
                <Route path='/logout' component={AsyncScreen.logout} />
                <Route path='/signup' component={AsyncScreen.signup} />
                <Route path='/changepassword' component={AsyncScreen.changePassword} />
                <Route path='/resetpassword' component={AsyncScreen.resetPassword} /> */}
            </Switch>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state
}); 

export default withRouter(connect(mapStateToProps)(Routes));