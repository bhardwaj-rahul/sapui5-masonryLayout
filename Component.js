sap.ui.define([
    'sap/ui/core/UIComponent'
], function (UIComponent) {
    "use strict";

    return UIComponent.extend("sap.cc.Component", {
        metadata: {
            rootView: "sap.cc.view.main",
            dependencies: {
                libs: [
                    "sap.ui.unified",
                    "sap.m"
                ]
            },
            includes : [ "css/style.css" ],

            config: {
                sample: {
                    stretch: true,
                    files: [
                        
                    ]
                }
            }
        },
        
        init: function () {
			
			UIComponent.prototype.init.apply(this, arguments);

		},
    });

});
