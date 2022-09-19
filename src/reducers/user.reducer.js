const initialState = {
  data: [],
  id: -1,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, ...action.payload }
    default:
      return state;
  }
}