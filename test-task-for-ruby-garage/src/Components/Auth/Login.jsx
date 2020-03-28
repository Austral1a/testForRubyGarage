import React from 'react';
import {connect} from 'react-redux';
import {loginWithGoogle} from '../../store/actions/loginWithGoogle';
import { useEffect } from 'react';
import getCurrSignedInUser from '../../store/actions/getCurrSignedInUser';

const mapStateToProps = (state) => ({
    isUserSignedIn: state.getCurrSignedInUserReducer.isCurrUserHolds,
    isUserLoggedIn: state.loginWithGoogleReducer.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
    loginWithGoogle: () => {
        dispatch(loginWithGoogle());
    },
    getCurrUser: () => {
        dispatch(getCurrSignedInUser());
    },
});

const Login = ({loginWithGoogle, isUserSignedIn, isUserLoggedIn, getCurrUser}) => {
    useEffect(() => {
        getCurrUser();
    }, [isUserSignedIn, isUserLoggedIn])
    return (
        <div>
            <button 
                className='btn-sign-in-with-google' 
                onClick={loginWithGoogle}>
                <h3>Sign In With Google</h3>
                <span className="material-icons">open_in_new</span>
            </button>
        </div>
    );
};

const ConnectedLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default ConnectedLogin;