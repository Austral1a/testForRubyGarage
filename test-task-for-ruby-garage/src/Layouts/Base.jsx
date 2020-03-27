import React from 'react';
import getCurrSignedInUser from '../store/actions/getCurrSignedInUser';
import ConnectedTodoApp from '../Components/TodoApp';
import AuthLayout from '../Layouts/Auth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import {connect} from 'react-redux';
import { useEffect } from 'react';

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.loginWithGoogleReducer.isAuth,
    isUserSignedIn: state.getCurrSignedInUserReducer.isCurrUserHolds,
});

const mapDispatchToProps = (dispatch) => ({
    getCurrUser: () => {
        dispatch(getCurrSignedInUser());
    },
});


const BaseLayout = ({isUserLoggedIn, isUserSignedIn, getCurrUser}) => {
    useEffect(() => {
        getCurrUser();
    }, [])
    return (
        <Router>
            <Switch>
                {
                    isUserLoggedIn ? <Redirect from='/login' to='/todo' /> : null
                }
                {
                    isUserSignedIn ? <Route exact path='/todo' component={ConnectedTodoApp} /> : <Route exact path='/login' component={AuthLayout} />
                }
                <Route path='/login' component={AuthLayout} />
            </Switch>
        </Router>
    );
};

const ConnectedBaseLayout = connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseLayout);

export default ConnectedBaseLayout;

