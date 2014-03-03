var twitterFeed = new DevExpress.data.DataSource({store:[], load:getTwitterData, pageSize:5});
var tweetPopUp = ko.observable(false);
var ref = undefined;
var loadPanelVisible = ko.observable(false);
var firstTime


function getTwitterData(){
    //console.log(options);
    loadPanelVisible(true);

    return $.ajax({ 
        url:"http://syntaxdonors.org/uwdeca/twitter_workaround.php", 
        dataType: "json",
        async: true,
        error: function(jqXHR, textStatus, errorThrown){
            showError("Network Error");
        }
        

        }).done( function (data) {
            for (var i = 0; i < data.length; i++) {
                data[i].text = parseTweet(data[i].text);
                data[i].created_at = relativeTime(data[i].created_at); 
                //twitterFeed.store().insert(data[i]);
            }
            loadPanelVisible(false);
            //twitterFeed.pageIndex(0);
            //$('#delegate-list').dxList('instance').endUpdate();
        });
}

//getTwitterData();

AppNamespace.stream = function(){
    var viewModel = {
        listDataSource: twitterFeed,
        tweet: function(){
            ref = window.open('https://twitter.com/intent/tweet?hashtags=ignite2014&related=uwdeca&screen_name=uwdeca', '_blank', 'location=yes')
        }
    };

    return viewModel;
}
