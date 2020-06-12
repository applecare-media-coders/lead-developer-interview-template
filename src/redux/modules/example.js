// Action Types
const EXAMPLE_ACTION = 'EXAMPLE_ACTION';

// Action Creators
export function exampleActionCreator(action) {
  return {
    type: EXAMPLE_ACTION,
    example: action,
  };
}

// Initial state for reducer
const initialState = {
  example: true,
};

// Reducers
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case EXAMPLE_ACTION: {
      return {
        ...state,
        example: action.example,
      };
    }
    default: {
      return state;
    }
  }
}
