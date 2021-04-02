import React, {useReducer} from 'react'

function appReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return state
  }
}

function Counter() {

  const initialState = {count: 0};
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}

export default Counter