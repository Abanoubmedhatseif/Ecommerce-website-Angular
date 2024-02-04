import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AnimateTimings } from '@angular/animations';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  shoppinglist !: Array<any> ;
  constructor ( private cartservice : CartService){}

  ngOnInit(){
      this.cartservice.getList().subscribe((value) => {this.shoppinglist = value 

      //console.log(this.shoppinglist);
        this.shoppinglist.forEach(item => {
        console.log(`Item: ${item}, Quantity: ${item.quantity}`);
        })
    })
    
  }

  increaseQuantity(item : any){
    this.cartservice.IncreaseQuantity(item);
  }

  decreaseQuantity(item : any){
    this.cartservice.DecreaseQuantity(item)
  }

  removeFromShoppingList (item : any){
    this.cartservice.RemoveFromShoppingList(item);
  }
  

}
