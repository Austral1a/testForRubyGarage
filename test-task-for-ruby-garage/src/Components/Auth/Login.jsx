import React from 'react';
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
            <p>21asd</p>
            <button onClick={loginWithGoogle}>Login</button>
        </div>
    );
};

const ConnectedLogin = connect(
    null,
    mapDispatchToProps
)(Login);

export default ConnectedLogin;