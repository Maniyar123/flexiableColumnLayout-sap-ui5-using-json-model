sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.fcl.fclproject.controller.Detail", {
            onInit: function () {
                this.bus = this.getOwnerComponent().getEventBus();
                this.bus.subscribe("flexible", "setDetailPage", this.onTriggerItemPress, this);
                var s=this.getOwnerComponent().getModel("newModel").getProperty("/sId");
                var z=this.getOwnerComponent().getModel("newModel").getData().companies.find(a=>a.id === s);
                var model = new sap.ui.model.json.JSONModel(z.items);
                this.getView().byId("detailListItems").setModel(model);

            },
            onTriggerItemPress:function(){
                var s=this.getOwnerComponent().getModel("newModel").getProperty("/sId");
                var z=this.getOwnerComponent().getModel("newModel").getData().companies.find(a=>a.id === s);
                var model = new sap.ui.model.json.JSONModel(z.items);
                this.getView().byId("detailListItems").setModel(model);

            },
            onDetailItemPress:function(o){
                var sItems = o.getParameter("listItem").getBindingContext().getObject();
                this.getView().getModel("newModel").setProperty("/sItems", sItems);
                this.bus.publish("flexible", "setDetailDetailPage");
            
            }
           
        });
    });