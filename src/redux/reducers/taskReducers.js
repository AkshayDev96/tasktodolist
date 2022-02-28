import { TASK_ADD, TASK_REMOVE, TASK_SEARCH } from "../constants/taskConstant"

const initialState = {
  list: [{ id: 1, text: "clean the house" }],
  result:[]
};

export const taskReducers = (state = initialState, action) => {
  let { type, payload } = action
  switch (type) {
    case TASK_ADD:
      state = {
        list: [...state.list, payload]
      };
      return state
    case TASK_REMOVE:
      state = {
        list: state.list.filter((todo) => todo.id !== payload)
      }
      return state
    case TASK_SEARCH:
      state = {
        ...state,
        result: state.list.filter((todo) => todo.text.match(payload))
      }
      return state
    default:
      return state
  }
}