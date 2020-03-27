import React,{ useEffect } from 'react';
import {connect} from 'react-redux';
import {loginWithGoogle} from '../../store/actions/loginWithGoogle';

const mapDispatchToProps = (dispatch) => ({
    loginWithGoogle: () => {
        dispatch(loginWithGoogle());
    },
});

const Login = ({loginWithGoogle}) => {
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
    null,
    mapDispatchToProps
)(Login);

export default ConnectedLogin;