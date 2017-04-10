'use strict'
var chai = require('jasmine');
var shop = require('../app/library.js')
describe("Create a shoppingCart class: with some features",function(){
	it("the item_name should be a type of object,and an instance of the shoppingCart class",function(){
		var item_name = new shoppingCart('Bread');
		expect(typeof item_name).toEqual(typeof {});
		expect(item_name instance of shoppingCart).toBeTruthy();
	});
    it("the quantity should be a type of object,and an instance of the shoppingCart class",function(){
    	var quantity = new shoppingCart(4);
    	expect(typeof quantity).toEqual(typeof {});
    	expect(quantity instance of shoppingCart).toBeTruthy();
    });
    it("the price should be a type of object,and an instance of the shoppingCart class",function(){
    	var price = new shoppingCart(#2500.00);
    	expect(typeof price).toEqual(typeof {});
    	expect(price instance of shoppingCart).toBeTruthy();
    });
	}
}