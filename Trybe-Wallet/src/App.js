import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet'
import './bulma.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <section class="hero is-primary all">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Hello, TrybeWallet!
      </h1>
              <h2 class="subtitle">
                Wallet
      </h2>
            </div>
          </div>
        </section>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/carteira" component={Wallet} />
        </Switch>
      </div>
    )
  }
}

export default App;
