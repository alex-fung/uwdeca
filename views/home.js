AppNamespace.home = function(){
    var viewModel ={
        message: ko.observable('Welcome!'),
        name: ko.observable(''),
        sayHello: function(){
            this.message("Hello " + this.name() + '!');
        },
        viewMain: function(){
            AppNamespace.app.navigate("main");
        }
    };
    return viewModel;
}