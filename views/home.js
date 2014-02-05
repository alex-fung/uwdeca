AppNamespace.home = function () {
    var viewModel = {
        message: ko.observable('Welcome!'),
        name: ko.observable(''),
        sayHello: function () {
            this.message("Hello " + this.name() + '!');
        },
        greet: function () {
            AppNamespace.app.navigate("greeting/" + this.name());
        }
    };
    return viewModel;
};