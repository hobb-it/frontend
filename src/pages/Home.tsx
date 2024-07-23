import LoginForm from '../components/LoginForm';
import { useCookies } from 'react-cookie';

function Home() {

  const [cookies] = useCookies(['id_token']);

    return (<div>
        <h1>Home</h1>
        <p>Wow questo sito è proprio bello</p>
        {!(cookies.id_token?.length > 0) && <LoginForm flow="implicit"/>}
        {cookies.id_token?.length > 0 && <p>Benvenuto!</p>}
      </div>);
  }
  
  export default Home;