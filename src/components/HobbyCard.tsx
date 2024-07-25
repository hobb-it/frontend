import React from 'react';

interface Props {
    hobbyCard: any;
}

function HobbyCard({hobbyCard}: Props) {
    return (
        <>
            <div className='row'>
                <p className="col-6">
                    {hobbyCard.categoryName}
                </p>
                <p className="col-6">
                    {hobbyCard.username}
                </p>
            </div>
            <div className='row'>
                <p className="col-auto">
                    {hobbyCard.description}
                </p>
            </div>
            <div className='row'>
                <p className="col-auto">
                    {hobbyCard.contacts}
                </p>
            </div>
        </>
    );
}

export default HobbyCard;