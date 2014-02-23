function getSchedule2(){
    var response = undefined;
    $.ajax({ 
        url:"http://syntaxdonors.org/uwdeca/schedule.json", 
        dataType: "json",
        async: false,
        error: function(jqXHR, textStatus, errorThrown){
            showError("Network Error");
        }}).done(function(data){
            console.log(data);
            for(var i = 0; i < data.length; i++){
                data[i].humanStartTime = formatDate(data[i].startTime);
                data[i].humanEndTime = formatDate(data[i].endTime);
            }
            response = data;
        });
        return response;
    }



var schedule = new DevExpress.data.DataSource(getSchedule2());
schedule.searchExpr(function(dataItem) {
    return dataItem.startTime;
});
schedule.searchValue("Fri");
schedule.load();

AppNamespace.events = function(params){
    var viewModel = {
        
        changeDay: function(options){

            //console.log(options.itemData.text.substring(0, 3));
            schedule.searchValue(options.itemData.text.substring(0, 3));
            schedule.load();
        },
        tabs: [
                { text: "Friday" },
                { text: "Saturday"}
            ]
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