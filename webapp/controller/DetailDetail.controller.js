sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.fcl.fclproject.controller.DetailDetail", {
            onInit: function () {
                this.bus = this.getOwnerComponent().getEventBus();
                this.bus.subscribe("flexible", "setDetailDetailPage", this.onTriggerDetailDetailItemPress, this);

                
                var selectedItem = this.getOwnerComponent().getModel("newModel").getProperty("/sItems");
                var model = new sap.ui.model.json.JSONModel(selectedItem.items);
                this.getView().byId("detailDetailListItems").setModel(model);
            },

            onTriggerDetailDetailItemPress: function () {
                var selectedItem = this.getOwnerComponent().getModel("newModel").getProperty("/sItems");
                var model = new sap.ui.model.json.JSONModel(selectedItem.items);
                this.getView().byId("detailDetailListItems").setModel(model);
            },
        
            onDetailDetailItemPress: function () {
                this.bus.publish("flexible", "setDetailPage");
            }
        });
    });



