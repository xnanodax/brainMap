import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import {
//   fetchDecks,
//   fetchDeck,
//   createDeck,
//   updateDeck,
//   deleteDeck
// } from './utils/deck_util';

// import {
//   fetchDecks,
//   fetchDeck,
//   createDeck,
//   updateDeck,
//   deleteDeck
// } from './actions/deck_actions';

// window.fetchDecks = fetchDecks;
// window.fetchDeck = fetchDeck;
// window.createDeck = createDeck;
// window.updateDeck = updateDeck;
// window.deleteDeck = deleteDeck;

// import {
//   fetchCards,
//   fetchCard,
//   createCard,
//   updateCard,
//   deleteCard
// } from './utils/card_util';

import {
  fetchCards,
  fetchCard,
  createCard,
  updateCard,
  deleteCard
} from './actions/card_actions';

window.fetchCards = fetchCards;
window.fetchCard = fetchCard;
window.createCard = createCard;
window.updateCard = updateCard;
window.deleteCard = deleteCard;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {currentUser: window.currentUser}
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.dispatch = store.dispatch;
  window.getState = store.getState;


  ReactDOM.render(<Root store={store} />, root);
});


//testing
// import { signup, login, logout } from './utils/session_util';
import { signup, login, logout } from './actions/session';
// window.signup = signup;
// window.login = login;
window.logout = logout;
//testing
