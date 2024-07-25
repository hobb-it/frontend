import React from 'react';
import { useCookies } from 'react-cookie';
import LoginForm from '../components/LoginForm';
import { Navigate } from 'react-router-dom';

function LoginPage() {

    const [cookies] = useCookies(['id_token']);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="text-center">
                    <h1 className="display-4">Benvenuti su Hobb.it</h1>
                    <p className="lead">La Vostra Porta verso Nuovi Orizzonti di Creatività!</p>
                    <p>Per accedere a tutte le funzionalità offerte della nostra piattaforma, ti consigliamo di accedere con Google.</p>
                </div>
                {!(cookies.id_token?.length > 0) && <LoginForm flow="implicit"/>}
                {cookies.id_token?.length > 0 && <Navigate to="/profile"/>}
            </div>
        </>
    );
}

export default LoginPage;