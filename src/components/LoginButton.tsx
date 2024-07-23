import React, { MouseEventHandler } from 'react';

interface Props {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

function LoginButton({text, onClick}: Props) {

    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
};

export default LoginButton;