import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import initialPage from '../pages/initialPage';
import infoPerson from '../pages/infoPerson';
import Header from '../components/Header';
import CardPerson from '../pages/CardsPerson';
import Footer from '../components/Footer'

function Routes() {
    return (
        <div className="full-page">
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={initialPage} />
                <Route path="/infoperson" component={infoPerson} />
                <Route path="/cardinfo/:id" render={ (props) => < CardPerson {...props} />}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
        </div>
    )
}

export default Routes;