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
        <>
        <Router>
            <Switch>
                {
                    isUserLoggedIn ? <Route exact path='/todo' component={TodoApp} /> : <Route exact path='/login' component={AuthLayout} />
                }
                {
                    isUserLoggedIn ? <Redirect from='/login' to='/todo' /> : <Redirect from='/' to='/login' />
                }
            </Switch>
        </Router>
        </>
    );
};

const ConnectedBaseLayout = connect(
    mapStateToProps,
)(BaseLayout);

export default ConnectedBaseLayout;

