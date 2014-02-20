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


function search(query){
    x.searchValue(query);
    x.pageIndex(0);
    x.load().done(function(){
        delegateListVisible((query === "")?false:true);
    });
}

function showPasswordDialog(e){
    unFocus();
    passwordDialog(true);
    selectedDelegate = e.itemData;
}

function hidePasswordDialog(){
    unFocus();
    passwordDialog(false);
    selectedDelegate = undefined;
}

function navigateToDelegate(){
    unFocus();
    if(email() === selectedDelegate.email){
        AppNamespace.app.navigate("delegate/" + selectedDelegate.id);
        selectedDelegate = undefined;
    }
    else{
        DevExpress.ui.notify('Incorrect Email', 'error', 3000);
    }
    email("");

}


AppNamespace.personal_schedule = function(){
    $.ajax({ 
        url:"http://syntaxdonors.org/uwdeca/data.json", 
        dataType: "json",
        async: false,
        error: function(jqXHR, textStatus, errorThrown){
            showError("Network Error");
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

        
    var viewModel = {



        text: ko.observable(""),
        test: function(){
            search(viewModel.text());
        },
        listDataSource: x,
        showList: delegateListVisible,
        focused: function(){
            //console.log($("#delegate-list").dxList("instance"));
            if(typeof $("#delegate-list").dxList("instance").option == 'function')  //Hack
                $("#delegate-list").dxList("instance").option("height", window.innerHeight-100);
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