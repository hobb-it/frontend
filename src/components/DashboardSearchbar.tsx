import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

interface Props {
    cookies: any;
    setHobbyCards: any;
    setError: any;
}

function DashboardSearchbar({cookies, setHobbyCards, setError}: Props) {
    const [search, setSearch] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const fetchHobbyCardsOfCategory = async () => {
        try {
            let response = await fetch(`http://localhost:8080/api/hobbycard/all?categoryName=${search}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookies.id_token}`,
                }  
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const _hobbyCards = await response.json();
            return _hobbyCards;
        } catch (error : any) {
        setError(error.message);
        return [];
        }
    };

    const handleSubmit = () => {
        fetchHobbyCardsOfCategory().then((data) => {
            setHobbyCards(data);
        })
    };

    const handleReset = () => {
        setSearch('');
        fetchHobbyCardsOfCategory().then((data) => {
            setHobbyCards(data);
        })
    };

    return (
        <nav className='navbar navbar-light bg-light row'>
            <form className='form-inline col-12'>
                <input type="search" className="category-input" placeholder='Cerca per categoria' value={search} onChange={handleSearch}/>
                <button type="button" className="btn btn-outline-success" onClick={handleSubmit}>Cerca categoria</button>
                <button type="button" className="btn btn-outline-success" onClick={handleReset}>Reset</button>
            </form>
        </nav>
    );
}

export default DashboardSearchbar;