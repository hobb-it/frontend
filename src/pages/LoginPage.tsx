import React from 'react';
import LoginForm from '../components/LoginForm';
import { Navigate } from 'react-router-dom';

function LoginPage() {

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="text-center">
                    <h1 className="display-4">Benvenuti su Hobb.it</h1>
                    <p className="lead">La Vostra Porta verso Nuovi Orizzonti di Creatività!</p>
                    <p>Per accedere a tutte le funzionalità offerte della nostra piattaforma, ti consigliamo di accedere con Google.</p>
                </div>
                {!window.localStorage.getItem("id_token") && <LoginForm flow="auth-code"/>}
                {window.localStorage.getItem("id_token") && <Navigate to="/dashboard"/>}
            </div>
        </>
    );
}

export default LoginPage;