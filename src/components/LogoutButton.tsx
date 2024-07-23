import React from 'react';
import { useCookies } from 'react-cookie';

function LogoutButton() {

    const [cookies, setCookie, removeCookie] = useCookies(['id_token']);

    const deleteToken = () => {
        removeCookie('id_token');
    }

    return (
        <button onClick={deleteToken}>Logout</button>
    );
};

export default LogoutButton;