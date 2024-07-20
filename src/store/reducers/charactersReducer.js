import {
  CHARACTERS_REJECT,
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
} from '../types/characterTypes';

const initialState = {
  characterList: [],
  pending: false,
  error: null,
  params: {
    page: 1,
    status: null,
    gender: null,
    name: null,
  },
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING_CHARACTERS:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CHARACTERS:
      return {
        ...state,
        characterList: action.payload,
        pending: false,
      };
    case CHARACTERS_REJECT:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default characterReducer;
