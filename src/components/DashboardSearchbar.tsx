import React, { useState } from 'react';

interface Props {
    setHobbyCards: any;
    setError: any;
}

function DashboardSearchbar({setHobbyCards, setError}: Props) {
    const [search, setSearch] = useState('');
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const fetchHobbyCardsOfCategory = async () => {
        try {
            let response = await fetch(`${backendUrl}/api/hobbycard/all?categoryName=${search}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${window.localStorage.getItem('id_token')}`,
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