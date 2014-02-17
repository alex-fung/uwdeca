AppNamespace.maps = function(){
    var viewModel = {
    	details: ko.observable(),
    	locationItemClicked: function(e) {
    		this.visible(false);
    		$('#map').dxMap('instance').removeMarker(this.markers);
    		$('#map').dxMap('instance').addMarker(e.itemData);
    		if(e.itemData.text == "Quantum Nano Centre")
    			$('#map').dxMap('instance').option('zoom', 19);
    		else if(e.itemData.text == "Waterloo Inn")
    			$('#map').dxMap('instance').option('zoom', 15);
    		else
    			$('#map').dxMap('instance').option('zoom', 18);
    	},
    	navItemClicked: function (e) {
    		this.details(e.itemData.contents);
    		if(e.itemData.text != "UW Campus") {
    			$('#map').hide();
    			$('#locations').hide();
    		}
		   	else {
		   		$('#map').show();
		   		$('#locations').show();
		   	}
		},
		visible: ko.observable(false),
		togglePopover: function() {
		    this.visible(!this.visible());
		},
		markers: [
			{ location: [43.47212, -80.543961], text: "Quantum Nano Centre" }, 
			{ location: [43.491413, -80.529356], text: "Waterloo Inn" }, 
			{ location: [43.465955, -80.522404], text: "Beta Night Club" }
		],
		navItems: [
			{ text: "UW Campus", icon: "find", contents:"" },
		    { text: "QNC", icon: "user", contents:"<strong>QNC</strong>" },
		    { text: "Waterloo Inn", icon: "find", contents:"<strong>Waterloo</strong>" }
		]
    };

    return viewModel;
}


