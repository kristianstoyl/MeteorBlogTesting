Router.configure({
    layoutTemplate: 'layout'  //can be any template name
    /*
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
     */
});

Router.map(function(){
    this.route('home', {path: '/'});
    this.route('playground');
    this.route('testing');
    this.route('about');
});