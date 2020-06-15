//console.log("app.js include");

// ServiceWorker Registration
if('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);

        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

//headers
//import  * as $ from "https://unpkg.com/jquery@3.3.1/dist/jquery.min.js";
//var $ = require("https://unpkg.com/jquery@3.3.1/dist/jquery.min.js")
/*
$(function(){
  $('.mobile-tab').hide();
  $('#burg').on('click', function(){
    $('.mobile-tab').slideToggle(600)
  });
});
*/
/*

//riot.mount('rt')
//route.start()

(async function(){
  await riot.compile()
  //riot.mount('rt')
  //route.start()
  /*
  route((tag) => {
    riot.mount('route', tag)
  })

//  route('/', function(){
//    riot.mount('route');
//  })
var curr_page=null

route(
function go_to(path) {
    if (curr_page) {
        curr_page.unmount(true);
    }
    if (path === 'main' ) {
        curr_page = riot.mount('main')[0];
    } else if (path === 'rii') {
        curr_page = riot.mount('rii')[0];
    } else {
        curr_page = riot.mount('app')[0];
    }
  });
riot.mount('rt')
route.start(true);

})()
/*
function go_to(page){
  if(page=="main"){
    riot.unmount(true);
    riot.mount('main')
    //route.exec();
  }
}

  route('/main', function(){
    go_to('main')
    //riot.mount('main');
    //riot.unmount('rii')
  })
  route('/rii', function(){
    //riot.mount('rii');
    //riot.unmount('main')
  })
  //route('/*', function () {
  //  riot.mount('main');
  //});
*/
  /*
  route('', () => {
    riot.mount('rt')
  })
  */
    //riot.mount('main')
    //riot.mount('rii')
    //riot.mount('header')

/*
app.currentPage = null;

var goTo = function(page){
  if (app.currentPage) {
    app.currentPage.unmount(true); //unmount and keep parent tag
  }
  app.currentPage = riot.mount(page)[0]; //remember current page
};

riot.route(function() {
  console.info("this page is not defined");
  //do nothing (alternatively go to 404 page or home)
});

riot.route('/inventory', function(){
  goTo('inventory');
});

riot.route('/options', function() {
  goTo('options');
});

//riot.mount('*')
/*
    riot.compile().then(() => {
      riot.mount('my-test','todo');
      //riot.mount('todo');
    })
(async function(){
  await riot.compile()
  riot.mount('rt')
  route.start()
  route((tag) => {
    riot.mount('route', tag)
  })
  route('/main', function(){
    riot.mount('main');
  })

  route('', () => {
  riot.mount('rt')
  riot.route('/post/*', function (id) {
    riot.mount('main', 'post', posts[id]);
  });
})
    //riot.mount('main')
    riot.mount('header')
 })()

riot.compile().then(() => {
 riot.mount('todo', {
   title: 'I want to behave!',
   items: [
     { title: 'Avoid excessive caffeine', done: true },
     { title: 'Hidden item',  hidden: true },
     { title: 'Be less provocative'  },
     { title: 'Be nice to people' }
   ]
 })
})
*/
