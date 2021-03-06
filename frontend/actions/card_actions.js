import * as CardAPIUtil from '../utils/card_util';
import { fetchDecks } from './deck_actions';

export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const REMOVE_CARD = "REMOVE_CARD";
export const RECEIVE_CARD_ERRORS = "RECEIVE_CARD_ERRORS";

const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});

const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

const removeCard = card => ({
  type: REMOVE_CARD,
  card
});

const receiveCardErrors = errors => ({
  type: RECEIVE_CARD_ERRORS,
  errors
});

export const fetchCards = deckId => dispatch => (
  CardAPIUtil.fetchCards(deckId)
    .then((cards) => dispatch(receiveCards(cards)),
          (errors) => dispatch(receiveCardErrors(errors.responseJSON)))
);

export const fetchCard = (deckId, cardId) => dispatch => (
  CardAPIUtil.fetchCard(deckId, cardId)
    .then((cards) => dispatch(receiveCard(cards)),
          (errors) => dispatch(receiveCardErrors(errors.responseJSON)))
);

export const createCard = (deckId, card) => dispatch => (
  CardAPIUtil.createCard(deckId, card)
    .then((newCard) => dispatch(receiveCard(newCard)),
          (errors) => dispatch(receiveCardErrors(errors.responseJSON)))
    .then(() => dispatch(fetchDecks()))
);

export const updateCard = (card) => dispatch => (
  CardAPIUtil.updateCard(card)
    .then((updatedCard) => dispatch(receiveCard(updatedCard)),
          (errors) => dispatch(receiveCardErrors(errors.responseJSON)))
);

export const deleteCard = (cardId) => dispatch => (
  CardAPIUtil.deleteCard(cardId)
    .then((delCard) => dispatch(removeCard(delCard)),
          (errors) => dispatch(receiveCardErrors(errors.responseJSON)))
    .then(() => dispatch(fetchDecks()))
);

export const clearCardErrors = () => dispatch => (
  dispatch(receiveCardErrors([]))
);
