import React from 'react';
import { useCookies } from 'react-cookie';

interface Props {
    className?: string;
}

function LogoutButton({className}: Props) {

    const [cookies, setCookie, removeCookie] = useCookies(['id_token']);

    const deleteToken = () => {
        removeCookie('id_token');
    }

    return (
        <button onClick={deleteToken} className={className}>Logout</button>
    );
};

export default LogoutButton;