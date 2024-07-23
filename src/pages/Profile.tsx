import { useCookies } from 'react-cookie';
import ListGroup from '../components/ListGroupd';
import { useState, useEffect } from 'react';

function Profile() {

  const [cookies, setCookie, removeCookie] = useCookies(['id_token']);
  const [hobbyCards, setHobbyCards] = useState([""]);

  const getHobbyCards = async () => {
    let hobbyCards = null;
   
    let response = await fetch("http://localhost:8080/api/hobbycard/all", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookies.id_token}`
        }
     });
    hobbyCards = await response.json();
    return hobbyCards;
  };

    return (
      <div> 
        <h1>My Profile</h1>
        {!(cookies.id_token?.length > 0) && <p>Devi fare il login per vedere il tuo profilo</p>}
        {(cookies.id_token?.length > 0) && <p>Benvenuto!</p>}
        <ListGroup/>
      </div>
    );
    
  };
  
  export default Profile;