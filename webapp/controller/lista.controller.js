sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.fiori_13.cadastro_de_alunos.controller.lista", {
		onAdd: function () {
			sap.m.MessageToast.show("Funcionou_Adicionar");
		},

		onItemPress: function (oEvent) {
			// sap.m.MessageToast.show("Funciono_Item");
			var oItem = oEvent.getParameters().listItem;
			var oContext = oItem.getBindingContext();
			var oAluno = oContext.getObject();
			var sId = oAluno.Id;
			this.getOwnerComponent().getRouter().navTo("exibir", {
				codigo: sId
			});

		},

		onSearch: function (oControlEvent) {
			var oSearchField = oControlEvent.getSource();
			var sValue = oSearchField.getValue();
			sap.m.MessageToast.show("Pesquisa " + sValue);
			// console.log(sValue);
		}
	});
});