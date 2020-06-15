(async function(){
  await riot.compile()
//  riot.mount('req')
  riot.mount('header')
//  riot.mount('rt')
  /*
  route((tag) => {
    riot.mount('route', tag)
  })
*/
//  route('/', function(){
//    riot.mount('route');
//  })
var curr_page=null

route(
function go_to(path) {
    if (curr_page) {
        curr_page.unmount(true);
    }
    if (path === 'mode' ) {
        curr_page = riot.mount('mode')[0];
    } else if (path === 'rii') {
        curr_page = riot.mount('rii')[0];
    } else if (path === 'rend') {
      //curr_page = riot.mount('#tags')[0];
      //riot.mount('rend');
            //curr_page = riot.mount('*')[0];
    } /*else {
        curr_page = riot.mount('*')[0];
    }*/
  });

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
*/
