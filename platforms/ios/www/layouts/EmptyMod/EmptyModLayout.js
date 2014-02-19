(function($, DX, undefined) {
    DX.framework.html.EmptyModLayoutController = DX.framework.html.DefaultLayoutController.inherit({ctor: function(options) {
            options = options || {};
            options.layoutTemplateName = "emptyMod";
            this.callBase(options)
        }});
    DX.framework.html.layoutControllers.push({
        navigationType: "emptyMod",
        controller: new DX.framework.html.EmptyModLayoutController
    })
})(jQuery, DevExpress);