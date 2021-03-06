import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import ChangeAtributes from './pages/changeAtributes';
import PageLegends from './pages/PageLegends';
import Header from './components/Header';
import HeaderAtributes from './components/HeaderAtributes';
import Register from './pages/Register';
import Provider from './Provider/Provider'

function App() {
  return (
    <Provider>
    <BrowserRouter>
    <Header/>
    <HeaderAtributes/>
    
    <Route exact path="/" component={ChangeAtributes} />
    <Route path="/legends" component={PageLegends}/>
    <Route path="/register" component={Register} />
   
    </BrowserRouter>
    </Provider>
  );
}

export default App;
