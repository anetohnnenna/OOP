
function shoppingCart(item_name,quantity,price){
	this.item_name=item_name;
	this.quantity=quantity;
	this.price=price;
	this.getitem_name=function(){
		return this.item_name
	};
	this.getquantity=function(){
		return this.quantity
	};
	this.getprice=function(){
		return this.price
	};
	this.Cart=function(){
		var onCart=this.price * this.quantity;
		return onCart;
	}
	this.emptyCart=function(){
		this.Cart=[];
	}
}
module.exports=shoppingCart