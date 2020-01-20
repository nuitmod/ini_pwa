//var local=localStorage;

//local.setItem('wm1', 'Ruth');

//var output=local.getItem('wm1');
//console.log(output);


//Test local data
var form = document.querySelector('form')
var ul = document.querySelector('ul')
var button = document.getElementById('clear-all')
var input = document.getElementById('item')
//    text;
/*
//li create
function li_maker(text){
  var li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}
*/
const li_maker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function(e){
  e.preventDefault();

  li_maker(input.value);
  input.value = '';
});
