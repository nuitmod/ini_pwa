import { composeWithDevTools } from 'redux-devtools-extension';

var reducer = Redux.combineReducers({
  todos: (state = [], action) => {
    var newState = Object.assign([], state);
    if (action.type == 'add') {
      newState.push(action.item);
    }
    if (action.type == 'remove') {
      newState.splice(action.index, 1);
    }
    return newState;
  }
});

var store = Redux.createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
var input_field=document.getElementById('todo')

var render = () => {
  var container = document.getElementById('container');
  container.innerHTML = '';
  input_field.value='';
  var state = store.getState();
  state.todos.forEach((todo, i) => {
    var e = document.createElement('div');
    e.innerHTML = todo;
    container.appendChild(e);
    e.onclick = () => {
      store.dispatch({
        type: 'remove',
        index: i
      });
      render();
    }
  });
};

document.getElementById('submit-todo').onclick = () => {
  store.dispatch({
    type: 'add',
    item: input_field.value
  });
  render();
};
