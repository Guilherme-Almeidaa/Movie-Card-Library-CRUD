import Routes from './routes'
import './css/bulma.min.css';
import Provider from './context/Provider';
import './css/infoRyusPerson.css';

function App() {
  return (
    <Provider>
    <Routes />
    </Provider>
  );
}

export default App;
