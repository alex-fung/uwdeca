AppNamespace.main = function(){
    var viewModel = {
        viewWorkshops: function(){
            AppNamespace.app.navigate("workshops");
        },
        viewMaps: function(){
            AppNamespace.app.navigate("maps");
        }
    };
    return viewModel;
}

/*
selectedIndex = ko.observable(0);
items= [
    { text: 'item1', icon: 'plus' },
    { text: 'item2', icon: 'plus' },
    { text: 'item3', icon: 'plus' }             
];
*/