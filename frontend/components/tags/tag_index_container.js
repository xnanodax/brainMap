import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TagIndex from './tag_index';

import {
  fetchTaggings,
  createTagging,
  deleteTagging,
  fetchAllTags,
} from './../../actions/tagging_action';


const mapStateToProps = (state, ownProps) => ({
  tags: Object.values(state.entities.tags),
  deckId: ownProps.match.params.deckId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTaggings: (deckId) => dispatch(fetchTaggings(deckId)),
  createTagging: (deckId, name) => dispatch(createTagging(deckId, name)),
  deleteTagging: (deckId, tagId) => dispatch(deleteTagging(deckId, tagId)),
  fetchAllTags: (name) => dispatch(fetchAllTags(name))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TagIndex));
