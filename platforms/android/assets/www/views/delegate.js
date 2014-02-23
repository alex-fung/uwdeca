
function getDelegateByID(query){
    var delegate = undefined;

    //needs to be synchronous request
    $.ajax({ 
        url:"http://syntaxdonors.org/uwdeca/data.json", 
        dataType: "json",
        async: false,
        error: function(jqXHR, textStatus, errorThrown){
            showError("Network Error");
        }
        

        }).done(function (data) {   
        for (var i = 0; i < data.length; i++) {
            //console.log(query === data[i].id);
            if(data[i].id === query){  //always use 3 equals
                delegate = data[i];
                break;
            }
        }

    });

    //console.log(delegate);

    return delegate;
}


AppNamespace.delegate = function(params){
    var delegate = getDelegateByID(params.delegate);
    if(!delegate) alert("Error Getting Delegate");

    

    var viewModel = {
        name: delegate.name,
        wTime: delegate.workshopTime,
        wLoc:delegate.workshopLocation,
        c1Time:delegate.case1Time,
        c2Time:delegate.case2Time,
        c1Loc:delegate.case1Location,
        c2Loc:delegate.case2Location

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