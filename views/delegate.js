
function getDelegateByID    (query){
    var delegate = undefined;

    //needs to be synchronous request
    $.ajax({url: "data/data.json", async: false, dataType: "json"}).done(function (data) {   
        for (var i = 0; i < data.length; i++) {
            //console.log(query === data[i].id);
            if(data[i].id === query){  //always use 3 equals
                console.log("hello");
                delegate = data[i];
                break;
            }
        }

    });

    console.log(delegate);

    return delegate;
}


AppNamespace.delegate = function(params){
    var delegate = getDelegateByID(params.delegate);

    if(!delegate) console.log("Error Getting Delegate");

    var viewModel = {
        name: delegate.name,
        workshop: delegate.workshop,
        case1: delegate.case1,
        case2: delegate.case2

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