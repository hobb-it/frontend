import React from 'react';
import { useCookies } from 'react-cookie';

interface Props {
    className?: string;
}

function LogoutButton({className}: Props) {

    const deleteToken = () => {
        window.localStorage.removeItem('id_token');
        window.localStorage.removeItem('access_token');
        window.localStorage.removeItem('refresh_token');
        window.location.href = "http://localhost:3000/"
    }

    return (
        <button onClick={deleteToken} className={className}>Logout</button>
    );
};

export default LogoutButton;