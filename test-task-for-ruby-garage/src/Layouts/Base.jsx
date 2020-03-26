import React from 'react';
import TodoApp from '../Components/TodoApp';
import AuthLayout from '../Layouts/Auth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.loginWithGoogleReducer.isAuth,
});


const BaseLayout = ({isUserLoggedIn}) => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    {isUserLoggedIn ? <Redirect to='/todo' component={TodoApp} /> : <Redirect to='/login' component={AuthLayout} />}
                </Route>
            </Switch>
        </Router>
    );
};

const ConnectedBaseLayout = connect(
    mapStateToProps,
)(BaseLayout);

export default ConnectedBaseLayout;

