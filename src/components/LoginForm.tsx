import React from 'react';
import { useGoogleLogin, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import LoginButton  from './LoginButton';
import { useCookies } from 'react-cookie';

interface Props {
    flow: string;
}

function LoginForm({flow}: Props) {
    const [cookies, setCookie, removeCookie] = useCookies(['id_token']);

    const codeLogin = useGoogleLogin({
        onSuccess: credentialResponse => {
            let auth = credentialResponse.code;
            document.cookie = 'id_token=${auth}';
            console.log(auth);
          },
        flow: 'auth-code',
        ux_mode: 'redirect',
        redirect_uri: 'http://localhost:3000/profile',
    });

    const implicitLogin = (credentialResponse : CredentialResponse) => {
        let token = credentialResponse.credential;
        setCookie("id_token", token);
        console.log(token);
    }

    return (
        <div>
            {flow === 'auth-code' && <LoginButton onClick={() => codeLogin()} text={"Sign in with Google 🚀"}></LoginButton>}
            {flow === 'implicit' && <GoogleLogin onSuccess={implicitLogin} ></GoogleLogin>}
        </div>
    );
};

export default LoginForm;