import LoginForm from '../components/LoginForm';
import { useCookies } from 'react-cookie';

function Home() {

  const [cookies] = useCookies(['id_token']);

    return (<div className="container mt-5">
      <div className="text-center">
          <h1 className="display-4">Benvenuti su Hobb.it</h1>
          <p className="lead">La Vostra Porta verso Nuovi Orizzonti di Creatività!</p>
      </div>
  
      <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
              <p className="text-justify">
                  Avete mai desiderato esplorare nuovi hobby, affinare le vostre abilità o semplicemente immergervi in una nuova passione? Hobb.it è qui per trasformare i vostri sogni in realtà! La nostra piattaforma vi offre l'opportunità di prenotare lezioni per una vasta gamma di hobby, impartite da persone esperte e appassionate.
              </p>
          </div>
      </div>
  
      <div className="text-center mt-5">
          <h2>Scoprite, Imparate, Crescete</h2>
          <p className="lead">
              Con Hobb.it, il mondo dei passatempi si apre a voi in modo semplice e accessibile. Che siate interessati alla pittura, alla cucina, alla musica, al giardinaggio, al fai-da-te o a qualsiasi altro hobby, troverete l’insegnante giusto per voi. Le nostre lezioni sono adatte a tutti i livelli di esperienza, dai principianti agli esperti che desiderano perfezionarsi.
          </p>
      </div>
  
      <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
              <h3>Perché Scegliere Hobb.it?</h3>
              <ul className="list-group">
                  <li className="list-group-item">Esperti Qualificati: Collaboriamo con insegnanti esperti e talentuosi, selezionati per la loro competenza e la passione nel condividere le loro conoscenze.</li>
                  <li className="list-group-item">Flessibilità: Potete scegliere lezioni private o di gruppo, online o in presenza, a seconda delle vostre preferenze e disponibilità.</li>
                  <li className="list-group-item">Varietà: Offriamo una vasta gamma di hobby, permettendovi di esplorare nuove passioni o di approfondire quelle esistenti.</li>
                  <li className="list-group-item">Facilità d'Uso: La nostra piattaforma è intuitiva e facile da usare, permettendovi di trovare e prenotare lezioni in pochi clic.</li>
                  <li className="list-group-item">Comunità: Entrate a far parte di una comunità di appassionati come voi, con cui potrete condividere esperienze e consigli.</li>
              </ul>
          </div>
      </div>
  
      <div className="text-center mt-5">
          <h3>Come Funziona?</h3>
      </div>
  
      <div className="row mt-3">
          <div className="col-md-8 offset-md-2">
              <ol className="list-group">
                  <li className="list-group-item">Esplorate: Sfogliate la nostra vasta gamma di hobby e scoprite le lezioni disponibili.</li>
                  <li className="list-group-item">Prenotate: Scegliete l'insegnante e l'orario che meglio si adattano alle vostre esigenze.</li>
                  <li className="list-group-item">Imparate: Partecipate alla lezione e iniziate a coltivare il vostro nuovo hobby con il supporto di un esperto.</li>
              </ol>
          </div>
      </div>
  
      <div className="text-center mt-5">
          <h3>Iniziate il Vostro Viaggio con Hobb.it Oggi Stesso!</h3>
          <p className="lead">
              Non aspettate oltre! Iscrivetevi a Hobb.it e iniziate a esplorare il meraviglioso mondo degli hobby. Che siate alla ricerca di un modo per rilassarvi, per esprimere la vostra creatività o per imparare qualcosa di nuovo, Hobb.it è il posto giusto per voi.
          </p>
          <a href="#" className="btn btn-primary btn-lg mt-3">Unitevi a noi</a>
      </div>
  </div>
        
    );
  }
  
  export default Home;