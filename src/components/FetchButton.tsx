import React from 'react';

interface Props {
    url: string;
    text: string;
    responseHandler: (response: Response) => any;
}

function FetchButton({url, text, responseHandler}: Props) {
    const fetchData = async () => {
        try {
            const response = fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                }
            });
            responseHandler(await response); // Handle the response data as needed
        } catch (error) {
            console.error('Error fetching hobbyCards:', error);
        }
    };

    return (
        <button onClick={fetchData}>{text}</button>
    );
}

export default FetchButton;