AppNamespace.maps = function(){
    var viewModel = {
    	details: ko.observable(),
    	visible: ko.observable(false),
    	getHeight: function(){
    		return $('main').height() - 76;
    	},
		togglePopover: function() {
		    this.visible(!this.visible());
		},
    	markerItemClicked: function(e) {
    		this.visible(false);
    		$('#map').dxMap('instance').removeMarker(this.markers);
    		$('#map').dxMap('instance').addMarker(e.itemData);
    		if(e.itemData.text == "Quantum Nano Centre")
    			$('#map').dxMap('instance').option('zoom', 17);
    		else if(e.itemData.text == "Waterloo Inn")
    			$('#map').dxMap('instance').option('zoom', 15);
    		else
    			$('#map').dxMap('instance').option('zoom', 18);
    	},
    	navItemClicked: function (e) {

    		//$('#map').dxMap('instance').removeMarker(this.markers);
    		//$('#map').dxMap('instance').addMarker(e.itemData);
    		switch(e.itemData.text){
    			case "QNC":
    				$('#map').dxMap('instance').option({'zoom': 17, 'location': [43.471215, -80.544163]})
    				break;
    			case "Waterloo Inn":
    				$('#map').dxMap('instance').option({'zoom': 15, 'location': [43.491413, -80.529356]})
    				break;
    			case "Beta Night Club":
    				$('#map').dxMap('instance').option({'zoom': 18, 'location': [43.465955, -80.522404]})
    				break;
    		}


    		// $('#dropdown').dxSelectBox('instance').option('value', 1);
    		// this.details(e.itemData.contents);
    		// if(e.itemData.text != "City of Waterloo") {
    		// 	$('#map').hide();
    		// 	$('#locations').hide();
    		// 	$('#contents').show();
    		// 	if(e.itemData.text == "QNC")
		   	// 		$('#dropdown').show()
		   	// 	else
		   	// 		$('#dropdown').hide()
    		// }
		   	// else {
		   	// 	$('#map').show();
		   	// 	$('#locations').show();
		   	// 	$('#contents').hide();
		   	// 	$('#dropdown').hide()
		   	// }
		},
		changeFloor: function () {
			var value = $('#dropdown').dxSelectBox('instance').option('value');
			if ($('#navBarContainer').dxNavBar('instance').option('selectedIndex') == 1) {
				if (value < 2) {
					this.details("<img src='images/qnc01.png'>");
				}
				else {
					this.details("<img src='images/qnc02.png'>");
				}
			} else {
				this.details("<img src='images/winn.png'>");
			}
		},
		markers: [
			{ location: [43.471215, -80.544163], text: "Quantum Nano Centre" }, 
			{ location: [43.491413, -80.529356], text: "Waterloo Inn" }, 
			{ location: [43.465955, -80.522404], text: "Beta Night Club" }
		],
		navItems: [
		    { text: "QNC", icon: "card", contents:"<img src='images/qnc01.png'>" },
		    { text: "Waterloo Inn", icon: "home", contents:"<img src='images/winn.png'>" },
		    { text: "Beta Night Club", icon: "map", contents:"" }
		],
		floors: [
		    { text: "First Floor", floor: 1 },
		    { text: "Second Floor", floor: 2 }
		]
    };

    return viewModel;
}
