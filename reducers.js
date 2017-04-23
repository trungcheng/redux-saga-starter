export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'X2':
      return state * 2;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
