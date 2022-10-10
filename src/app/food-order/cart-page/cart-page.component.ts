import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from "../shared/models/Cart";
import { CartItem } from '../shared/models/CartItem';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart: Cart;

  constructor(private cartService: CartService) { 
    this.setCart();
  }

  ngOnInit(): void {
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityString:string){
    const quantity = parseInt(quantityString);
    this.cartService.changeQuantity(quantity, cartItem.food.id);
    this.setCart();
  }
}
