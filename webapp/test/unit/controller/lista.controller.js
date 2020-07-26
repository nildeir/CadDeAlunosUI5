/*global QUnit*/

sap.ui.define([
	"ovly/fiori_13/cadastro_de_alunos/controller/lista.controller"
], function (Controller) {
	"use strict";

	QUnit.module("lista Controller");

	QUnit.test("I should test the lista controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});