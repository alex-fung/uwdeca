var x = new DevExpress.data.DataSource([]);

//function returns string that search api will look into
//could put into variable declaration but cleaner this way
x.searchExpr(function(dataItem) {
    return dataItem.name;
});

$.ajax({ 
        url:"data/data.json", 
        dataType: "json",
        async: false,
        error: function(jqXHR, textStatus, errorThrown){

        }
        

        }).done( function (data) {

                    for (var i = 0; i < data.length; i++) {
                        x.store().insert(data[i]);
                    }

                    //usefull if we want to group stuff, read docs for more info - dont need it right now
                    //x.group(function (dataItem) {
                    //    return dataItem.name.charAt(0);
                    //});
        });

x.searchValue("");
x.load();


function search(query){
    x.searchValue(query);
    x.load();
}

AppNamespace.schedule = function(){
    var viewModel = {
        length: 10,
        lengthDescription: "Enter your name...",
        text: ko.observable(""),
        test: function(){
            search(viewModel.text());
        },
        listDataSource: x,
        navigateToDelegate: function(e){
            //console.log(e.itemData);
            AppNamespace.app.navigate("delegate/" + e.itemData.id);
            //viewModel.showError('network');
        },
        error: {
            'network': ko.observable(false)
        },
        showError: function(errorName){
            viewModel.error[errorName](true);
        },
        hideError: function(errorName){
            viewModel.error[errorName](false);
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