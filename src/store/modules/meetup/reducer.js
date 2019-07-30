import produce from 'immer';

const INITIAL_STATE = {
  selected: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/SET_MEETUP': {
        draft.selected = action.payload.meetup;
        break;
      }
      case '@meetup/UNSET_MEETUP': {
        draft.selected = null;
        break;
      }
      default:
    }
  });
}
