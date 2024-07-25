import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    hobbyCard: any;
}

function HobbyCard({hobbyCard}: Props) {
    return (
        <>
            <div className='container hobbyCard'>
                <div className='row align-items-center'>
                    <p className='col-12 col-sm-3 hobbycard-head'>Categoria</p>
                    <p className='col-12 col-sm-9 hobbycard-data'>{hobbyCard.categoryName}</p>
                </div>
                <div className='row align-items-center'>
                    <p className='col-12 col-sm-3 hobbycard-head'>Username</p>
                    <p className='col-12 col-sm-9 hobbycard-data'>{hobbyCard.username}</p>
                </div>
                <div className='row align-items-center'>
                    <p className='col-12 col-sm-3 hobbycard-head'>Descrizione</p>
                    <p className='col-12 col-sm-9 hobbycard-data'>{hobbyCard.description}</p>
                </div>
                <div className='row align-items-center'>
                    <p className='col-12 col-sm-3 hobbycard-head'>Contatti</p>
                    <p className='col-12 col-sm-9 hobbycard-data'>{hobbyCard.contacts}</p>
                </div>
                <div className='row'>
                    <div className='col-12 align-items-center my-1'>
                        <Link to="/book/lesson" className='btn btn-outline-success'>Prenota una lezione</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HobbyCard;