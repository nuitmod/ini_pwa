function mi_local(){
  var local=localStorage;
  local.setItem('wm1', 'Ruth');

  var output=local.getItem('wm1');
  console.log(output);
}

mi_local();


var form = document.querySelector('form');
var ul = document.getElementById('ul-id');
var button = document.getElementById('clear-all');
var input = document.getElementById('item');

//li create
function li_maker(text){
  var li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}


form.addEventListener('submit', function(e){
  e.preventDefault();

  li_maker(input.value);
  input.value = '';
});
