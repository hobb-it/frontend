import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

function ListGroup() {
    const [items, setItems] = useState([]);
    const [fetchedCards, setFetchedCards] = useState(false);
    const [cookies] = useCookies(['id_token']);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getHobbyCards = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/hobbycard/all", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookies.id_token}`
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const hobbyCards = await response.json();
            return hobbyCards;
        } catch (error : any) {
            setError(error.message);
            return [];
        }
    };

    useEffect(() => {
        if (!fetchedCards) {
            getHobbyCards().then((data) => {
                setItems(data);
                setLoading(false);
            }).catch(() => {
                setLoading(false);
            });
            setFetchedCards(true);
        }
    }, [fetchedCards]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <ul>
            {items.map((item : any, index) => (
                <li key={index}>{item.description}</li>  // Assicurati che item abbia una proprietà unica come id
            ))}
        </ul>
    );
}

export default ListGroup;
