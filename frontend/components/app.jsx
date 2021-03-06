import React from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';
import HomePageNotLoggedInContainer from './homepage/homepage_not_logged_in_container';
import NavBarLoggedInContainer from './navbar_log/navbar_logged_in_container';
import DeckIndexContainer from './decks/deck_index_container';
import DeckShowContainer from './decks/deck_show_container';
import DeckFormContainer from './decks/deck_form/deck_form_container';
import CardIndexContainer from './cards/index/card_index_container';
import StudyContainer from './study/study_container';
import SearchContainer from './search/search_container';
import DeleteConfirmationContainer from './delete_confirmation/delete_confirmation_container';
import {
  AuthRoute,
  ProtectedRoute,
  ModalRoute
} from '../utils/route_util';

const App = () => (
    <div className="app">
      <Redirect exact to="/login" from="/" />

      <Switch>
        <ProtectedRoute path="/deck/view/:deckId" component={DeckIndexContainer} />
        <ProtectedRoute path="/deck" component={DeckIndexContainer} />
      </Switch>

      <ModalRoute path="/deck/view/:deckId" component={DeleteConfirmationContainer} />
      
      <ProtectedRoute path="/deck/new" component={DeckFormContainer} />
      <ProtectedRoute exact path="/deck/view/:deckId" component={DeckShowContainer} />
      <ProtectedRoute path="/study" component={NavBarLoggedInContainer} />

      <Switch>
        <ProtectedRoute exact path="/study/:deckId" component={StudyContainer} />
        <ProtectedRoute path="/search" component={SearchContainer} />

        <ProtectedRoute path="/deck" component={NavBarLoggedInContainer} />
        <AuthRoute exact path="/login" component={HomePageNotLoggedInContainer} />
        <AuthRoute exact path="/signup" component={HomePageNotLoggedInContainer} />
        <Route render={() => <Redirect to="/deck" />} />

      </Switch>
    </div>
);
export default App;