sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.fcl.fclproject.controller.List", {
            onInit: function () {
                this.bus = this.getOwnerComponent().getEventBus();
            },
            onListItemPress:function(oEvent){
               
                // this.getView().byId("fcl").toMidColumnPage(this.getView().byId("detail").getId());
                // this.getView().byId("fcl").setLayout("TwoColumnsMidExpanded");
                var sId = oEvent.getParameters()["listItem"].getBindingContext("newModel").getObject().id;
                this.getView().getModel("newModel").setProperty("/sId", sId);
                this.bus.publish("flexible", "setDetailPage");
       
        }
        });
    });
