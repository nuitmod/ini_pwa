var local=localStorage;
//local.setItem('wm1', 'Ruth');
//var output=local.getItem('wm1');
//console.log(output);

var form = document.querySelector('form');
var ul = document.getElementById('ul-id');
var button = document.getElementById('clear-all');
var input = document.getElementById('item');

var items_array = local.getItem('items') ? JSON.parse(local.getItem('items')) : [];

local.setItem('items', JSON.stringify(items_array));
var data=JSON.parse(local.getItem('items'));

//li create fn
function li_maker(text){
  var li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  items_array.push(input.value);
  local.setItem('items', JSON.stringify(items_array));
  li_maker(input.value);
  input.value = '';
});


data.forEach(item => {
  li_maker(item);
})

button.addEventListener('click', () => {
  local.clear();
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
  items_array = [];
})

var output=local.getItem('items');
//console.log(output);
