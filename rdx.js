//import { composeWithDevTools } from 'redux-devtools-extension';

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

var key_store="__key_rdx__";
var local = localStorage;

function save_state(st){
  local.setItem(key_store, JSON.stringify(st))
}

function load_state(){
  var json = local.getItem(key_store);
  var res = json ? JSON.parse(json) : undefined;
  //console.log(res);
  return res;
}

var store = Redux.createStore(reducer, load_state());
/*
var store = Redux.createStore(reducer
  , /* preloadedState,  composeEnhancers(
  applyMiddleware(...middleware),
   other store enhancers if any
));
*/

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

store.subscribe(()=>{
  save_state(store.getState());
})
