const numberReducer = (state, action) => {
 
    switch (action.type) {
      case 'INCREMENT':
        return state + action.Val
      case 'DECREMENT':
        return state - action.Val
      default:
        throw new Error()
    }
  }

  export default numberReducer;