var twitterFeed = new DevExpress.data.DataSource([]);

//messy maybe change later
/*var delegateListVisible = ko.observable(false);
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

                    for (var i = 0; i < data.length; i++) {
                        x.store().insert(data[i]);
                    }

                    //usefull if we want to group stuff, read docs for more info - dont need it right now
                    //x.group(function (dataItem) {
                    //    return dataItem.name.charAt(0);
                    //});
        }); */


//get twitter stream
$.ajax({ 
        url:"twitter_workaround.php", 
        dataType: "json",
        async: false,
        error: function(jqXHR, textStatus, errorThrown){
            showError("Network Error");
        }
        

        }).done( function (data) {
            for (var i = 0; i < data.length; i++) {
                data[i].text = parseTweet(data[i].text);
                twitterFeed.store().insert(data[i]);
            }

        });


AppNamespace.stream = function(){
    var viewModel = {
        listDataSource: twitterFeed

    };

    return viewModel;
}
