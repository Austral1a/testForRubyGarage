import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginWithGoogle} from '../../store/actions/loginWithGoogle';
import getCurrSignedInUser from '../../store/actions/getCurrSignedInUser';

const mapStateToProps = (state) => ({
    isUserSignedIn: state.getCurrSignedInUserReducer.isCurrUserHolds,
});

const mapDispatchToProps = (dispatch) => ({
    loginWithGoogle: () => {
        dispatch(loginWithGoogle());
    },
    getCurrUser: () => {
        dispatch(getCurrSignedInUser());
    },
});

const Login = ({loginWithGoogle, isUserSignedIn, getCurrUser}) => {
    useEffect(() => {
        getCurrUser();
    }, [isUserSignedIn, getCurrUser])
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

ConnectedLogin.propTypes = {
    loginWithGoogle: PropTypes.func,
    isUserSignedIn: PropTypes.bool,
    getCurrUser: PropTypes.func,
};

export default ConnectedLogin;