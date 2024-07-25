import { useCookies } from 'react-cookie';
import HobbyCard from '../components/HobbyCard';
import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import DashboardSearchbar from '../components/DashboardSearchbar';

function DashboardPage() {

  const [cookies] = useCookies(['id_token']);
  const [hobbyCards, setHobbyCards] = useState([""]);
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
      const _hobbyCards = await response.json();
      return _hobbyCards;
    } catch (error : any) {
        setError(error.message);
        return [];
    }
  };

  useEffect(() => {
      getHobbyCards().then((data) => {
        setHobbyCards(data);
      })
  }, []);

  if(!cookies.id_token) {
    return (<Navigate to="/" replace={true}/>)
  }

  return (
    <div className="container-fluid"> 
      <div className="row justify-content-center">
        <h1 className='col-auto'>Dashboard</h1>
      </div>
      <div className="row justify-content-center">
        <p className='col-auto'>Qui puoi visualizzare le proposte di insegnamento degli altri utenti.</p>
      </div>
      <div className='container'>
        {<DashboardSearchbar cookies={cookies} setHobbyCards={setHobbyCards} setError={setError}/>}
        <div id="hobbyCardContainer">
          {error && <p>Error: {error}</p>}
          {hobbyCards.map((hobbyCard : any, index) => (
            <div key={index} className="card container-fluid">
              <HobbyCard  hobbyCard={hobbyCard} />
            </div> 
          ))}
        </div>
      </div>
    </div>
  );
    
  };
  
  export default DashboardPage;