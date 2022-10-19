const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case '@counter/incremented':
          return state + 1;
        case '@counter/decremented':
          return state - 1;
        case '@counter/reseted':
          return 0;
        default:
          return state
      }
}

export default counterReducer