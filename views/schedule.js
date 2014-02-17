var x = new DevExpress.data.DataSource([]);

//messy maybe change later
var delegateListVisible = ko.observable(false);
var passwordDialog = ko.observable(false);
var selectedDelegate = undefined;
var email = ko.observable("");

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
            showError("Network Error");
        }
        

        }).done( function (data) {
                    console.log(data);

                    for (var i = 0; i < data.length; i++) {
                        x.store().insert(data[i]);
                    }

                    //usefull if we want to group stuff, read docs for more info - dont need it right now
                    //x.group(function (dataItem) {
                    //    return dataItem.name.charAt(0);
                    //});
        });


function search(query){
    x.searchValue(query);
    x.load().done(function(){
        delegateListVisible(true);
    });
}

function showPasswordDialog(e){
    passwordDialog(true);
    selectedDelegate = e.itemData;
}

function hidePasswordDialog(){
    passwordDialog(false);
    selectedDelegate = undefined;
}

function navigateToDelegate(){
    console.log(selectedDelegate);
    if(email() === selectedDelegate.email){
        AppNamespace.app.navigate("delegate/" + selectedDelegate.id);
        selectedDelegate = undefined;
    }
    else{
        DevExpress.ui.notify('Incorrect Email', 'error', 3000);
    }
    email("");

}


AppNamespace.schedule = function(){
    var viewModel = {
        text: ko.observable(""),
        test: function(){
            search(viewModel.text());
        },
        listDataSource: x,
        showList: delegateListVisible

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