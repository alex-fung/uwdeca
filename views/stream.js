var twitterFeed = new DevExpress.data.DataSource([]);
var tweetPopUp = ko.observable(false);

//get twitter stream
$.ajax({ 
        url:"twitter/twitter_workaround.php", 
        dataType: "json",
        async: false,
        error: function(jqXHR, textStatus, errorThrown){
            showError("Network Error");
        }
        

        }).done( function (data) {
            for (var i = 0; i < data.length; i++) {
                data[i].text = parseTweet(data[i].text);
                data[i].created_at = relativeTime(data[i].created_at); 
                twitterFeed.store().insert(data[i]);
            }
            twitterFeed.pageIndex(0);

        });

function cancel(){
    tweetPopUp(false);
}

function send(){
    tweetPopUp(false);
}


function postTweet(){
    twitter.doRequest("https://api.twitter.com/1.1/statuses/update.json?status=Testing123&display_coordinates=false", success, error);
}

AppNamespace.stream = function(){
    var viewModel = {
        listDataSource: twitterFeed,
        tweet: function(){
            tweetPopUp(true);
        },
        animate : { 
            show: { type: "slide", from: {opacity: 1, top: $(window).height() }, to: { top: 0 } },
            hide: { type: "slide", from: { top: 0 }, to: { top:     $(window).height() } }
        },
        barItems: [ { align: 'center', text: 'Tweet'}, 
                    { location: 'left', widget: 'button', options: { icon:'close', clickAction: cancel }},
                    { location: 'right', widget: 'button', options: { icon: 'globe', clickAction: send  }}
                    ] 
    };

    return viewModel;
}
