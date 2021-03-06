import * as TaggingAPIUtil from '../utils/tagging_util';

export const RECEIVE_TAGGINGS = "RECEIVE_TAGGINGS";
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";
export const REMOVE_TAGGING = "REMOVE_TAGGING";
export const RECEIVE_TAGGING_ERRORS = "RECEIVE_TAGGING_ERRORS";
export const RECEIVE_TAG_SEARCH_RESULTS = "RECEIVE_TAG_SEARCH_RESULTS";

const receiveTaggings = taggings => ({
  type: RECEIVE_TAGGINGS,
  taggings
});

const receiveTagging = tagging => ({
  type: RECEIVE_TAGGING,
  tagging
});

const removeTagging = tagging => ({
  type: REMOVE_TAGGING,
  tagging
});

const receiveTaggingErrors = errors => ({
  type: RECEIVE_TAGGING_ERRORS,
  errors
});

const receiveTagSearchResults = searchResults => ({
  type: RECEIVE_TAG_SEARCH_RESULTS,
  searchResults
});

export const fetchTaggings = (deckId) => dispatch => (
  TaggingAPIUtil.fetchTaggings(deckId)
    .then(taggings => dispatch(receiveTaggings(taggings)),
          errors => dispatch(receiveTaggingErrors(errors.responseJSON)))
);

export const createTagging = (deckId, tagId) => dispatch => (
  TaggingAPIUtil.createTagging(deckId, tagId)
    .then(tagging => dispatch(receiveTagging(tagging)),
          errors => dispatch(receiveTaggingErrors(errors.responseJSON)))
);


export const deleteTagging = (deckId, tagId) => dispatch => (
  TaggingAPIUtil.deleteTagging(deckId, tagId)
    .then(tagging => dispatch(removeTagging(tagging)),
        errors => dispatch(receiveTaggingErrors(errors.responseJSON)))
);



export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";

const receiveTags = (tags) => ({
  type: RECEIVE_TAGS,
  tags
});

const receiveTag = (tag) => ({
  type: RECEIVE_TAG,
  tag
});

export const fetchAllTags = (name) => dispatch => (
  TaggingAPIUtil.fetchAllTags(name)
    .then((tags) => dispatch(receiveTags(tags)),
      errors => dispatch(receiveTaggingErrors(errors.responseJSON)))
);

export const searchTags = (name) => dispatch => (
  TaggingAPIUtil.searchTags(name)
    .then(searchResults => dispatch(receiveTagSearchResults(searchResults)))
);
