import { Injectable } from '@angular/core';
import { Cart } from "../shared/models/Cart";
import { CartItem } from '../shared/models/CartItem';
import { Foods } from '../shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  constructor() { }

  addToCart(food:Foods){
    let cartItem = this.cart.items.find(i=>i.food.id === food.id);
    if(cartItem){
      this.changeQuantity(cartItem.quantity + 1, food.id);
      return;
    }

    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId:number){
    this.cart.items = this.cart.items.filter(item=> item.food.id != foodId);
  }

  changeQuantity(quantity: number, foodId: number){
    let cartItem = this.cart.items.find(item => item.food.id ===  foodId);
    if(!cartItem) return;

    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
