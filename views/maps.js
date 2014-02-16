AppNamespace.maps = function(){
    var viewModel = {
    	details: ko.observable(),
    	navItemClicked: function (e) {
    		this.details(e.itemData.contents);
    		if(e.itemData.text != "UW Campus")
    			$('#map').hide();
		   	else
		   		$('#map').show();
		}
    };

    return viewModel;
}

navItems = [
	{ text: "UW Campus", icon: "find", contents:"" },
    { text: "QNC", icon: "user", contents:"<strong>QNC</strong>" },
    { text: "Waterloo Inn", icon: "find", contents:"<strong>Waterloo</strong>" }
];



