import { useCookies } from 'react-cookie';
import ListGroup from '../components/ListGroupd';
import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";

function Profile() {

  const [cookies, setCookie, removeCookie] = useCookies(['id_token']);
  const [hobbyCards, setHobbyCards] = useState([""]);

  if(!cookies.id_token) {
    return (<Navigate to="/" replace={true}/>)
  }

  return (
    <div> 
      <h1>My Profile</h1>
      {(cookies.id_token?.length > 0) && <p>Benvenuto!</p>}
      <ListGroup/>
    </div>
  );
    
  };
  
  export default Profile;