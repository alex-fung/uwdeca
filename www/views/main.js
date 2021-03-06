AppNamespace.main = function(){
    var viewModel = {
        getSchedule: function (){
            var response = undefined;
            $.ajax({ 
                url:"http://syntaxdonors.org/uwdeca/schedule.json", 
                dataType: "json",
                async: false,
                error: function(jqXHR, textStatus, errorThrown){
                    showError("Network Error");
                }}).done(function(data){
                    response = data;
                });
            return response;
        },
        getCurrentEvent: function (){
            var schedule = viewModel.getSchedule();
            var rightNow = new Date();

            for (var i = 0; i < schedule.length; i++) {
                var start = new Date(schedule[i].startTime);
                var end = new Date(schedule[i].endTime);



                if(start.getTime() < rightNow.getTime() && end.getTime() > rightNow.getTime()) return schedule[i];

            }

            return -1;

        },
        showUpdate: false,
        eventTitle: ko.observable("No Current Event"),
        eventStart: ko.observable("N/A"),
        eventEnd: ko.observable("N/A"),
        eventLocation: ko.observable("N/A"),
        update: function(){
            var currentEvent = viewModel.getCurrentEvent();
            var noEvent = (currentEvent === -1);
            if(viewModel.eventTitle() === ((noEvent)? "No Current Event": currentEvent.title) && 
                viewModel.eventStart() === ((noEvent)? "N/A":formatDate(currentEvent.startTime)) && 
                viewModel.eventEnd() === ((noEvent)? "N/A":formatDate(currentEvent.endTime)) && 
                viewModel.eventLocation() === ((noEvent)? "N/A":currentEvent.location) && viewModel.showUpdate)  {
                DevExpress.ui.notify('Updated', 'success', 1000);
                viewModel.showUpdate = true;
                return;
            }

            viewModel.eventTitle(((noEvent)? "No Current Event": currentEvent.title));
            viewModel.eventStart((noEvent)? "N/A":formatDate(currentEvent.startTime));
            viewModel.eventEnd((noEvent)? "N/A":formatDate(currentEvent.endTime));
            viewModel.eventLocation((noEvent)? "N/A":currentEvent.location);
            viewModel.showUpdate = true;
        }               
    };
    viewModel.update();
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