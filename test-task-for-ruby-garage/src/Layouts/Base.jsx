import '../css/other/dbSnapshot.css';
import '../css/signOut.css';
import '../css/components/btn.css';
import dbSnaphot from '../firebase/forReviewer/getDb';
import signOut from '../firebase/signOutUser';
import React from 'react';
import PropTypes from 'prop-types';
import getCurrSignedInUser from '../store/actions/getCurrSignedInUser';
import ConnectedTodoApp from '../Components/TodoApp';
import AuthLayout from '../Layouts/Auth';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {connect} from 'react-redux';
import { useEffect } from 'react';

const mapStateToProps = (state) => ({
    currUser: state.getCurrSignedInUserReducer.currUser,
    isUserSignedIn: state.getCurrSignedInUserReducer.isCurrUserHolds,
});

const mapDispatchToProps = (dispatch) => ({
    getCurrUser: () => {
        dispatch(getCurrSignedInUser());
    },
});

const BaseLayout = ({isUserSignedIn, getCurrUser, currUser}) => {
    useEffect(() => {
        getCurrUser();
    }, [isUserSignedIn, getCurrUser]);
    return (
        <>
        <div className="db-snapshot">
            <button onClick={() => dbSnaphot(currUser.uid)}>
                DB SNAPSHOT
            </button>
        </div>
        {isUserSignedIn ? <div className="sign-out">
            <button className="btn" onClick={() => signOut()}>
                <h3>Sign Out</h3>
            </button>
        </div> : null}
            <Switch>
                <Route exact path="/login">
                    <AuthLayout />
                </Route>
                <Route exact path="/todo">
                    <ConnectedTodoApp />
                </Route>
            </Switch>
            <Switch>
                <Route path='/'>
                    {isUserSignedIn ? <Redirect to='/todo'/> : <Redirect to='/login'/>}
                </Route>
            </Switch>
        </>
    );
};

const ConnectedBaseLayout = connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseLayout);

ConnectedBaseLayout.propTypes = {
    isUserSignedIn: PropTypes.bool,
    getCurrUser: PropTypes.func,
    currUser: PropTypes.object,
}

export default ConnectedBaseLayout;

